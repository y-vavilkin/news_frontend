import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { BAD_URL, GLOBAL_ERROR } from '../../constants/errors';
import { UserAction } from '../../interfaces/user';
import { User } from '../../interfaces/auth';
import { changeError } from '../../helpers';
import { userFailed, userReceived, userReset } from '../actions/user';
import * as actionTypes from '../actions/actionTypes/user';
import getUser from '../api/getUser';

function * userWorker (action: UserAction) {
  try {
    const id = action.payload;
    // TODO
    if (typeof id === 'number' && !isNaN(id)) {
      const response: AxiosResponse<User> = yield call(getUser, id);
      yield put(userReset());
      yield put(userReceived(response.data));
    } else {
      yield put(userFailed(changeError(BAD_URL)));
    }
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.response?.data.message : GLOBAL_ERROR;
    yield put(userFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.USER_REQUESTED, userWorker);
}
