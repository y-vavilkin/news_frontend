import { type PostAction, type Post } from '../../types';

import * as actionTypes from '../actionTypes';

export const postsFailed = (error: string): PostAction => ({
  type: actionTypes.POSTS_FAILED,
  payload: [],
  error
});

export const postsReseived = (payload: Post[]): PostAction => ({
  type: actionTypes.POSTS_RECEIVED,
  payload,
  error: null
});

export const postsRequest = (): PostAction => ({
  type: actionTypes.POSTS_REQUESTED,
  payload: [],
  error: null
});
