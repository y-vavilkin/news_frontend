import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { GLOBAL_ERROR } from '../../constants/errors';
import { UserAction } from '../../interfaces/user';
import { changeError } from '../../helpers';
import { editProfileFailed, editProfileReceived, editProfileReset } from '../actions/user';
import * as actionTypes from '../actions/actionTypes/user';
import { closeModal } from '../actions/modal';
import editProfile from '../api/editProfile';
import { AuthUser } from '../../interfaces/auth';

function * editProfileWorker ({ payload }: UserAction) {
  try {
    const { data }: AxiosResponse<AuthUser> = yield call(editProfile, payload);
    yield put(editProfileReceived(data));
    yield put(editProfileReset());
    yield put(closeModal());
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.message : GLOBAL_ERROR;
    yield put(editProfileFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.EDIT_PROFILE_REQUESTED, editProfileWorker);
}
