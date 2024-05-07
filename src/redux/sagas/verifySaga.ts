import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthAction, AuthUser } from '../../interfaces/auth';
import { GLOBAL_ERROR } from '../../constants/errors';
import { changeError } from '../../helpers';
import { TOKEN } from '../../constants';
import { authUserFailure, authUserSuccess } from '../actions/auth';
import * as actionTypes from '../actions/actionTypes/auth';
import whoami from '../api/whoami';

function * verifySaga (action: AuthAction) {
  try {
    if (action.type === actionTypes.AUTH_USER_CHECK) {
      const { data }: AxiosResponse<AuthUser> = yield call(whoami);
      yield put(authUserSuccess(data));
    }
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError
      ? error.response?.data.message
      : GLOBAL_ERROR;
    localStorage.removeItem(TOKEN);
    yield put(authUserFailure(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.AUTH_USER_CHECK, verifySaga);
}
