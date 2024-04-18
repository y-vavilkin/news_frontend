import { type PostAction, type PostsState } from '../../types';

import { POSTS_REQUESTED, POSTS_RECEIVED, POSTS_FAILED } from '../actionTypes';

const initialState: PostsState = {
  postsArray: [],
  isLoading: false,
  error: null
};

export default function postsReducer (state: PostsState = initialState, action: PostAction): PostsState {
  switch (action.type) {
    case POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        postsArray: action.payload ?? [],
        error: null
      };
    case POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
