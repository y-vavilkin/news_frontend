import { PostAction, PostsState } from '../../interfaces/posts';
import * as actionTypes from '../actions/actionTypes/posts';

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null
};

export default function postsReducer (state: PostsState = initialState, action: PostAction): PostsState {
  switch (action.type) {
    case actionTypes.POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.POSTS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        posts: action.payload ?? []
      };
    case actionTypes.POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    default:
      return state;
  }
}
