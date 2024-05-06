import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthAction, AuthResponse } from '../../interfaces/auth';
import { GLOBAL_ERROR } from '../../constants/errors';
import { changeError } from '../../helpers';
import { TOKEN } from '../../constants';
import { authUserFailure, authUserSuccess } from '../actions/auth';
import * as actionTypes from '../actions/actionTypes/auth';
import { authenticate } from '../api/authenticate';
import { closeModal } from '../actions/modal';
import { userReset } from '../actions/user';

function * authSaga (action: AuthAction) {
  try {
    if (action.type === actionTypes.AUTH_USER_REGISTRATION) {
      const response: AxiosResponse<AuthResponse> = yield call(
        authenticate,
        action.payload,
        'registration'
      );
      localStorage.setItem(TOKEN, response.data.token);
      yield put(authUserSuccess(response.data.user));
      yield put(userReset());
      yield put(closeModal());
    }

    if (action.type === actionTypes.AUTH_USER_LOGIN) {
      const response: AxiosResponse<AuthResponse> = yield call(
        authenticate,
        action.payload,
        'login'
      );
      localStorage.setItem(TOKEN, response.data.token);
      yield put(authUserSuccess(response.data.user));
      yield put(userReset());
      yield put(closeModal());
    }
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError
      ? error.response?.data.message
      : GLOBAL_ERROR;
    yield put(authUserFailure(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.AUTH_USER_LOGIN, authSaga);
  yield takeLatest(actionTypes.AUTH_USER_REGISTRATION, authSaga);
}
