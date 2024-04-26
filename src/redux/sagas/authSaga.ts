import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthAction, AuthResponse } from '../../interfaces/auth';
import { GLOBAL_ERROR, TOKEN } from '../../constants';
import { changeStatusError } from '../../helpers';
import { AUTH_USER, AUTHORIZATION, REGISTRATION } from '../actionTypes';
import { authUserSuccess, authUserFailure } from '../actions/auth';
import { updateUserStatus } from '../actions/update';
import authorization from '../api/authorization';
import registartion from '../api/registartion';

function * authSaga (action: AuthAction) {
  try {
    if (action.payload.authData?.typeModal === REGISTRATION) {
      const response: AxiosResponse<AuthResponse> = yield call(registartion, action.payload.authData);
      localStorage.setItem(TOKEN, response.data.token);

      yield put(authUserSuccess());

      yield put(updateUserStatus(true));
    } else if (action.payload.authData?.typeModal === AUTHORIZATION) {
      const response: AxiosResponse<AuthResponse> = yield call(authorization, action.payload.authData);

      localStorage.setItem(TOKEN, response.data.token);

      yield put(authUserSuccess());

      yield put(updateUserStatus(true));
    }
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.response?.data.message : GLOBAL_ERROR;

    yield put(authUserFailure({ authData: null, error: changeStatusError(currentError) }));

    yield put(updateUserStatus(false));
  }
}

export default function * watcherSaga () {
  yield takeLatest(AUTH_USER, authSaga);
}
