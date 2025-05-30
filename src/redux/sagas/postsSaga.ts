import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { Post } from '../../interfaces/posts';
import getError from '../../helpers/getError';
import { changeError } from '../../helpers';
import { postsReseived, postsFailed } from '../actions/posts';
import * as actionTypes from '../actions/actionTypes/posts';
import getPosts from '../api/getPosts';

function * postsWorker () {
  try {
    const { data }: AxiosResponse<Post[]> = yield call(getPosts);
    yield put(postsReseived(data));
  } catch (error: unknown) {
    const currentError: string = getError(error);
    yield put(postsFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.POSTS_REQUESTED, postsWorker);
}
