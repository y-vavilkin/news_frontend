import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { changeError, extractErrorMessage } from '../../helpers';
import { AuthAction, AuthUser } from '../../interfaces/auth';
import { authUserFailure, authUserReceived, authUserReset } from '../actions/auth';
import * as actionTypes from '../actions/actionTypes/auth';
import whoami from '../api/whoami';

function * verifySaga (action: AuthAction) {
  try {
    if (action.type === actionTypes.AUTH_USER_CHECK) {
      const { data }: AxiosResponse<AuthUser> = yield call(whoami);
      yield put(authUserReceived(data));
    }
  } catch (error: unknown) {
    const currentError: string = extractErrorMessage(error);
    yield put(authUserReset());
    yield put(authUserFailure(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.AUTH_USER_CHECK, verifySaga);
}
