import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { PostRequest, UserAction } from '../../interfaces/user';
import { GLOBAL_ERROR } from '../../constants/errors';
import { Post } from '../../interfaces/posts';
import { changeError } from '../../helpers';
import { addPostFailed, addPostReceived } from '../actions/user';
import * as actionTypes from '../actions/actionTypes/user';
import { closeModal } from '../actions/modal';
import addPost from '../api/addPost';

function * addPostWorker ({ payload }: UserAction) {
  try {
    const { data }: AxiosResponse<Post> = yield call(addPost, payload as PostRequest);
    yield put(addPostReceived(data));
    yield put(closeModal());
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.message : GLOBAL_ERROR;
    yield put(addPostFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.ADD_POST_REQUESTED, addPostWorker);
}
