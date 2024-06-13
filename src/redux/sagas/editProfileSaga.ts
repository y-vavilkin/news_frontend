import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { EditProfileRequest, UserAction } from '../../interfaces/user';
import { AuthUser } from '../../interfaces/auth';
import getError from '../../helpers/getError';
import { changeError } from '../../helpers';
import { editProfileFailed, editProfileReceived, editProfileReset } from '../actions/user';
import * as actionTypes from '../actions/actionTypes/user';
import { closeModal } from '../actions/modal';
import editProfile from '../api/editProfile';

function * editProfileWorker ({ payload }: UserAction) {
  try {
    const { data }: AxiosResponse<AuthUser> = yield call(
      editProfile,
      payload as EditProfileRequest
    );
    yield put(editProfileReceived(data));
    yield put(editProfileReset());
    yield put(closeModal());
  } catch (error: unknown) {
    const currentError: string = getError(error);
    yield put(editProfileFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.EDIT_PROFILE_REQUESTED, editProfileWorker);
}
