import { PostAction, PostsState } from '../../interfaces/posts';
import { ALL } from '../../constants';
import * as actionTypes from '../actions/actionTypes/posts';

const initialState: PostsState = {
  posts: [],
  postsForView: [],
  isLoading: false,
  error: null,
  typeOfSearch: ALL
};

const postsReducer = (state: PostsState = initialState, action: PostAction): PostsState => {
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
        posts: action.payload,
        postsForView: action.payload
      };
    case actionTypes.POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.POSTS_SET_TYPE:
      return {
        ...state,
        typeOfSearch: action.payload
      };
    case actionTypes.POSTS_SEARCH_RECEIVED:
      return {
        ...state,
        postsForView: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
