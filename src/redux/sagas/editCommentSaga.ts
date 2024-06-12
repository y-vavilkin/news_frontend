import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { Comment, CommentAction, CommentData } from '../../interfaces/comments';
import { useCommentId } from '../../hooks/redux-hooks';
import { GLOBAL_ERROR } from '../../constants/errors';
import { changeError } from '../../helpers';
import * as actionTypes from '../actions/actionTypes/comments';
import editComment from '../api/editComment';
import {
  editCommentReceived,
  setInputTextForEdit,
  editCommentFailed,
  toggleEditInput,
  setCommentId
} from '../actions/comments';

function * editCommentWorker ({ payload }: CommentAction) {
  try {
    const commentId: number = yield select(useCommentId);
    const { data }: AxiosResponse<Comment> = yield call(
      editComment,
      payload as CommentData,
      commentId
    );
    yield put(setInputTextForEdit(''));
    yield put(toggleEditInput());
    yield put(setCommentId(-1));
    yield put(editCommentReceived(data));
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.message : GLOBAL_ERROR;
    yield put(editCommentFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.EDIT_COMMENT_REQUESTED, editCommentWorker);
}
