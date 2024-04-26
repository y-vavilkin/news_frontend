import { Post, PostAction } from '../../interfaces/posts';
import * as actionTypes from '../actionTypes';

export const postsFailed = (error: string): PostAction => ({
  type: actionTypes.POSTS_FAILED,
  payload: {
    posts: [],
    error
  }
});

export const postsReseived = (posts: Post[] | []): PostAction => ({
  type: actionTypes.POSTS_RECEIVED,
  payload: {
    posts,
    error: null
  }
});

export const postsRequest = (): PostAction => ({
  type: actionTypes.POSTS_REQUESTED,
  payload: {
    posts: [],
    error: null
  }
});
