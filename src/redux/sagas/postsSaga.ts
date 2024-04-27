import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { changeStatusError } from '../../helpers';
import { GLOBAL_ERROR } from '../../constants';
import { Post } from '../../interfaces/posts';
import { postsReseived, postsFailed } from '../actions/posts';
import { POSTS_REQUESTED } from '../actionTypes';
import getPosts from '../api/getPosts';

function * postsWorker () {
  try {
    const response: AxiosResponse<Post[] | []> = yield call(getPosts);

    const payload = { posts: response.data };

    yield put(postsReseived(payload.posts));
  } catch (error: unknown) {
    const currentError = error instanceof AxiosError ? error.message : GLOBAL_ERROR;

    const payload = { error: changeStatusError(currentError) };

    yield put(postsFailed(payload.error));
  }
}

export default function * watcherSaga () {
  yield takeLatest(POSTS_REQUESTED, postsWorker);
}
