import { PostAction, PostsState } from '../../interfaces/posts';
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
        posts: action.payload
      };
    case actionTypes.POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.SEARCH_POSTS:
      return {
        ...state,
        typeOfSearch: action.payload?.typeOfSearch ?? state.typeOfSearch,
        textForSearch: action.payload?.textForSearch ?? state.textForSearch
      };
    default:
      return state;
  }
};

export default postsReducer;
