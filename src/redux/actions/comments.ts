import { Comment, CommentAction } from '../../interfaces/comments';

import * as actionTypes from './actionTypes/comments';

export const commentsRequest = (): CommentAction => ({
  type: actionTypes.COMMENTS_REQUESTED
});

export const commentsFailed = (error: string): CommentAction => ({
  type: actionTypes.COMMENTS_FAILED,
  error
});

export const commentsReseived = (payload: Comment[]): CommentAction => ({
  type: actionTypes.COMMENTS_RECEIVED,
  payload
});
