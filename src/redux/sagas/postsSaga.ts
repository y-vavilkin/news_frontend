import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, type AxiosResponse } from 'axios';

import { type Post } from '../../types';

import { postsReseived, postsFailed } from '../actions/posts';
import { POSTS_REQUESTED } from '../actionTypes';
import getPosts from '../api/getPosts';

function * postsWorker () {
  try {
    const { data }: AxiosResponse<Post[]> = yield call(getPosts);
    yield put(postsReseived(data));
  } catch (error: unknown) {
    const currentError = error instanceof AxiosError ? error.message : 'problem with...';
    yield put(postsFailed(currentError));
  }
}

export default function * watcherSaga () {
  yield takeLatest(POSTS_REQUESTED, postsWorker);
}
