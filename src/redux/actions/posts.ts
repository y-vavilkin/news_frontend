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

export const setSearchText = (payload: string): PostAction => ({
  type: actionTypes.SET_SEARCH_TEXT,
  payload
});

export const setFilterSearch = (payload: string): PostAction => ({
  type: actionTypes.SET_SEARCH_FILTER,
  payload
});

export const resetSearch = (): PostAction => ({
  type: actionTypes.RESET_SEARCH
});
