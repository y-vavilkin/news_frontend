import { takeLatest, call, put } from 'redux-saga/effects';

import { CommentAction } from '../../interfaces/comments';
import getError from '../../helpers/getError';
import { changeError } from '../../helpers';
import { deleteCommentFailed, deleteCommentReceived } from '../actions/comments';
import * as actionTypes from '../actions/actionTypes/comments';
import deleteComment from '../api/deleteComment';

function * deleteCommentWorker ({ payload }: CommentAction) {
  try {
    yield call(deleteComment, payload as number);
    yield put(deleteCommentReceived());
  } catch (error: unknown) {
    const currentError: string = getError(error);
    yield put(deleteCommentFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.DELETE_COOMENT_REQUESTED, deleteCommentWorker);
}
