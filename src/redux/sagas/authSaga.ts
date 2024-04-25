import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { GLOBAL_ERROR, TOKEN } from '../../constants';
import { AuthAction, AuthResponse } from '../../types';
import registartion from '../api/registartion';
import authorization from '../api/authorization';
import { authUserSuccess, authUserFailure } from '../actions/auth';
import { AUTH_USER, AUTHORIZATION, REGISTRATION } from '../actionTypes';

function * authSaga (action: AuthAction) {
  try {
    if (action.payload?.typeModal === REGISTRATION) {
      const response: AxiosResponse<AuthResponse> = yield call(registartion, action.payload);

      localStorage.setItem(TOKEN, response.data.token);

      yield put(authUserSuccess());
    } else if (action.payload?.typeModal === AUTHORIZATION) {
      const response: AxiosResponse<AuthResponse> = yield call(authorization, action.payload);

      localStorage.setItem(TOKEN, response.data.token);

      yield put(authUserSuccess());
    }
  } catch (error: unknown) {
    const currentError = error instanceof AxiosError ? error.message : GLOBAL_ERROR;

    yield put(authUserFailure(currentError));
  }
}

export default function * watcherSaga () {
  yield takeLatest(AUTH_USER, authSaga);
}
