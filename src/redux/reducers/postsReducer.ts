import { Post, PostAction, PostsState } from '../../interfaces/posts';
import { ALL } from '../../constants/filters';
import * as actionTypes from '../actions/actionTypes/posts';

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
  textForSearch: '',
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
        posts: action.payload as Post[]
      };
    case actionTypes.POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        textForSearch: action.payload as string ?? initialState.textForSearch
      };
    case actionTypes.SET_SEARCH_FILTER:
      return {
        ...state,
        typeOfSearch: action.payload as string ?? initialState.typeOfSearch
      };
    case actionTypes.RESET_SEARCH:
      return {
        ...state,
        typeOfSearch: initialState.typeOfSearch,
        textForSearch: initialState.textForSearch
      };
    default:
      return state;
  }
};

export default postsReducer;
