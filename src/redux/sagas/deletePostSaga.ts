import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { GLOBAL_ERROR } from '../../constants/errors';
import { UserAction } from '../../interfaces/user';
import { changeError } from '../../helpers';
import { deletePostFailed, deletePostReceived } from '../actions/user';
import * as actionTypes from '../actions/actionTypes/user';
import deletePost from '../api/deletePost';

function * deletePostWorker ({ payload }: UserAction) {
  try {
    yield call(deletePost, payload as number);
    yield put(deletePostReceived());
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.message : GLOBAL_ERROR;
    yield put(deletePostFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.DELETE_POST_REQUESTED, deletePostWorker);
}
