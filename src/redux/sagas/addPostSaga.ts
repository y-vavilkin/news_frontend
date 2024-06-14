import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { PostRequest, UserAction } from '../../interfaces/user';
import { Post } from '../../interfaces/posts';
import getError from '../../helpers/getError';
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
    const currentError: string = getError(error);
    yield put(addPostFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.ADD_POST_REQUESTED, addPostWorker);
}
