import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { AuthAction, AuthFormData, AuthResponse } from '../../interfaces/auth';
import { changeError, extractErrorMessage } from '../../helpers';
import { useAuthType } from '../../hooks/redux-hooks';
import { TypeModal } from '../../interfaces/modal';
import { TOKEN } from '../../constants';
import { authUserFailure, authUserReceived } from '../actions/auth';
import * as actionTypes from '../actions/actionTypes/auth';
import { authenticate } from '../api/authenticate';
import { closeModal } from '../actions/modal';
import { userReset } from '../actions/user';

function * authSaga (action: AuthAction) {
  try {
    const modalType: TypeModal = yield select(useAuthType);
    const { data }: AxiosResponse<AuthResponse> = yield call(
      authenticate,
      action.payload as AuthFormData,
      modalType
    );
    localStorage.setItem(TOKEN, data.token);
    yield put(authUserReceived(data.user));
    yield put(userReset());
    yield put(closeModal());
  } catch (error: unknown) {
    const currentError: string = extractErrorMessage(error);
    yield put(authUserFailure(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.AUTH_USER_REQUESTED, authSaga);
}
