import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { GLOBAL_ERROR } from '../../constants/errors';
import { usePostId } from '../../hooks/redux-hooks';
import { Comment } from '../../interfaces/comments';
import { changeError } from '../../helpers';
import { commentsFailed, commentsReseived } from '../actions/comments';
import * as actionTypes from '../actions/actionTypes/comments';
import getComments from '../api/getComments';

function * commentsWorker () {
  try {
    const postId: number = yield select(usePostId);
    const { data }: AxiosResponse<Comment[]> = yield call(getComments, postId);
    yield put(commentsReseived(data));
  } catch (error: unknown) {
    const currentError: string = error instanceof AxiosError ? error.message : GLOBAL_ERROR;
    yield put(commentsFailed(changeError(currentError)));
  }
}

export default function * watcherSaga () {
  yield takeLatest(actionTypes.COMMENTS_REQUESTED, commentsWorker);
}
