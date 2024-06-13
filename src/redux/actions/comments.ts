import { Comment, CommentAction, CommentData } from '../../interfaces/comments';

import * as actionTypes from './actionTypes/comments';

export const commentsRequested = (): CommentAction => ({
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

export const addCommentRequested = (payload: CommentData): CommentAction => ({
  type: actionTypes.ADD_COMMENT_REQUESTED,
  payload
});

export const addCommentReceived = (payload: Comment): CommentAction => ({
  type: actionTypes.ADD_COMMENT_RECEIVED,
  payload
});

export const addCommentFailed = (error: string): CommentAction => ({
  type: actionTypes.ADD_COMMENT_FAILED,
  error
});

export const deleteCommentRequested = (payload: number): CommentAction => ({
  type: actionTypes.DELETE_COOMENT_REQUESTED,
  payload
});

export const deleteCommentReceived = (): CommentAction => ({
  type: actionTypes.DELETE_COOMENT_RECEIVED
});

export const deleteCommentFailed = (error: string): CommentAction => ({
  type: actionTypes.DELETE_COOMENT_FAILED,
  error
});

export const setCommentId = (payload: number): CommentAction => ({
  type: actionTypes.SET_COMMENT_ID,
  payload
});

export const editCommentRequested = (payload: CommentData): CommentAction => ({
  type: actionTypes.EDIT_COMMENT_REQUESTED,
  payload
});

export const editCommentReceived = (payload: Comment): CommentAction => ({
  type: actionTypes.EDIT_COMMENT_RECEIVED,
  payload
});

export const editCommentFailed = (error: string): CommentAction => ({
  type: actionTypes.EDIT_COMMENT_FAILED,
  error
});
