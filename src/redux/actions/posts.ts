import { Post, PostAction } from '../../interfaces/posts';
import * as actionTypes from './actionTypes/posts';

export const postsRequest = (): PostAction => ({
  type: actionTypes.POSTS_REQUESTED
});

export const postsFailed = (error: string): PostAction => ({
  type: actionTypes.POSTS_FAILED,
  error
});

export const postsReseived = (payload: Post[] | []): PostAction => ({
  type: actionTypes.POSTS_RECEIVED,
  payload
});

export const postsSetType = (payload: string): PostAction => ({
  type: actionTypes.POSTS_SET_TYPE,
  payload
});

export const postsSetInput = (payload: string): PostAction => ({
  type: actionTypes.POSTS_SET_INPUT,
  payload
});
