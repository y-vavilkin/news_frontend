import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { AuthAction, AuthResponse } from '../../interfaces/auth';
import { changeError, extractErrorMessage } from '../../helpers';
import { TypeModal } from '../../interfaces/modal';
import { TOKEN } from '../../constants';
import { authUserFailure, authUserSuccess } from '../actions/auth';
import * as actionTypes from '../actions/actionTypes/auth';
import { authenticate } from '../api/authenticate';
import { useAuthType } from '../hooks/hooks';
import { closeModal } from '../actions/modal';

function * authSaga (action: AuthAction) {
  try {
    const modalType: TypeModal = yield select(useAuthType);
    const { data }: AxiosResponse<AuthResponse> = yield call(
      authenticate,
      action.payload,
      modalType
    );
    localStorage.setItem(TOKEN, data.token);
    yield put(authUserSuccess(data.user));
    yield put(closeModal());
  } catch (error: unknown) {
    const currentError: string = extractErrorMessage(error);
    yield put(authUserFailure(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.AUTH_USER_REQUESTED, authSaga);
}
