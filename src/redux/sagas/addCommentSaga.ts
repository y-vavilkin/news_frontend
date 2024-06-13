import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { Comment, CommentAction, CommentData } from '../../interfaces/comments';
import { usePostId } from '../../hooks/redux-hooks';
import getError from '../../helpers/getError';
import { changeError } from '../../helpers';
import { addCommentFailed, addCommentReceived } from '../actions/comments';
import * as actionTypes from '../actions/actionTypes/comments';
import addComment from '../api/addComment';

function * addCommentWorker ({ payload }: CommentAction) {
  try {
    const postId: number = yield select(usePostId);
    const { data }: AxiosResponse<Comment> = yield call(addComment, payload as CommentData, postId);
    yield put(addCommentReceived(data));
  } catch (error: unknown) {
    const currentError: string = getError(error);
    yield put(addCommentFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.ADD_COMMENT_REQUESTED, addCommentWorker);
}
