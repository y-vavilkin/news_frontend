import { PostAction, Post } from '../../types';
import * as actionTypes from '../actionTypes';

export const postsFailed = (error: string): PostAction => ({
  type: actionTypes.POSTS_FAILED,
  error
});

export const postsReseived = (payload: Post[]): PostAction => ({
  type: actionTypes.POSTS_RECEIVED,
  payload
});

export const postsRequest = (): PostAction => ({
  type: actionTypes.POSTS_REQUESTED
});
