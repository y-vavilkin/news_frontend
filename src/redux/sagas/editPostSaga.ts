import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { PostRequest, UserAction } from '../../interfaces/user';
import { GLOBAL_ERROR } from '../../constants/errors';
import { usePostId } from '../../hooks/redux-hooks';
import { Post } from '../../interfaces/posts';
import { changeError } from '../../helpers';
import { editPostFailed, editPostReceived, setIdPost } from '../actions/user';
import * as actionTypes from '../actions/actionTypes/user';
import { closeModal } from '../actions/modal';
import editPost from '../api/editPost';

function * editPostWorker ({ payload }: UserAction) {
  try {
    const postId: number = yield select(usePostId);
    const { data }: AxiosResponse<Post> = yield call(editPost, payload as PostRequest, postId);
    yield put(editPostReceived(data));
    yield put(setIdPost(-1));
    yield put(closeModal());
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.message : GLOBAL_ERROR;
    yield put(editPostFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.EDIT_POST_REQUESTED, editPostWorker);
}
