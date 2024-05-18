import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { UserAction, User } from '../../interfaces/user';
import { changeError, extractErrorMessage } from '../../utils';
import { userFailed, userReceived } from '../actions/user';
import * as actionTypes from '../actions/actionTypes/user';
import getUser from '../api/getUser';

function * userWorker (action: UserAction) {
  try {
    const id = action.payload;
    const { data }: AxiosResponse<User> = yield call(getUser, Number(id));
    yield put(userReceived(data));
  } catch (error: unknown) {
    const currentError: string = extractErrorMessage(error);
    yield put(userFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.USER_REQUESTED, userWorker);
}
