import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { Comment, CommentAction, CommentData } from '../../interfaces/comments';
import { useCommentId } from '../../hooks/redux-hooks';
import getError from '../../helpers/getError';
import { changeError } from '../../helpers';
import * as actionTypes from '../actions/actionTypes/comments';
import editComment from '../api/editComment';
import {
  editCommentReceived,
  editCommentFailed,
  setFetchCommentId
} from '../actions/comments';

function * editCommentWorker ({ payload }: CommentAction) {
  try {
    const commentId: number = yield select(useCommentId);
    const { data }: AxiosResponse<Comment> = yield call(
      editComment,
      payload as CommentData,
      commentId
    );
    yield put(setFetchCommentId(null));
    yield put(editCommentReceived(data));
  } catch (error: unknown) {
    const currentError: string = getError(error);
    yield put(editCommentFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.EDIT_COMMENT_REQUESTED, editCommentWorker);
}
