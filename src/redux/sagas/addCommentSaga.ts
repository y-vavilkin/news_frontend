import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { Comment, CommentAction, CommentData } from '../../interfaces/comments';
import { GLOBAL_ERROR } from '../../constants/errors';
import { usePostId } from '../../hooks/redux-hooks';
import { changeError } from '../../helpers';
import { addCommentFailed, addCommentReceived, setInputText } from '../actions/comments';
import * as actionTypes from '../actions/actionTypes/comments';
import addComment from '../api/addComment';

function * addCommentWorker ({ payload }: CommentAction) {
  try {
    const postId: number = yield select(usePostId);
    const { data }: AxiosResponse<Comment> = yield call(addComment, payload as CommentData, postId);
    yield put(addCommentReceived(data));
    yield put(setInputText(''));
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.message : GLOBAL_ERROR;
    yield put(addCommentFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.ADD_COMMENT_REQUESTED, addCommentWorker);
}
