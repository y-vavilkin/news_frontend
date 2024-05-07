import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { AuthAction, AuthUser } from '../../interfaces/auth';
import { changeError, convertError } from '../../helpers';
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
    const currentError: string = convertError(error);
    localStorage.removeItem(TOKEN);
    yield put(authUserFailure(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.AUTH_USER_CHECK, verifySaga);
}
