import { UserState, UserAction } from '../../interfaces/user';
import * as actionTypes from '../actions/actionTypes/user';

const initialState: UserState = {
  isLoadingProfile: false,
  isLoadingPosts: false,
  error: null,
  user: null,
  userPosts: []
};

const postsReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case actionTypes.USER_REQUESTED:
      return {
        ...state,
        error: null,
        isLoadingProfile: true
      };
    case actionTypes.USER_RECEIVED:
      return {
        ...state,
        isLoadingProfile: false,
        user: action.payload,
        userPosts: action.payload?.posts
      };
    case actionTypes.USER_FAILED:
    case actionTypes.ADD_POST_FAILED:
      return {
        ...state,
        isLoadingPosts: false,
        error: action.error ?? null
      };
    case actionTypes.ADD_POST_REQUESTED:
      return {
        ...state,
        isLoadingPosts: true
      };
    case actionTypes.ADD_POST_SUCCESSES:
      return {
        ...state,
        isLoadingPosts: false,
        error: null,
        userPosts: [action.payload, ...state.userPosts]
      };
    case actionTypes.ADD_POST_RESET:
    case actionTypes.USER_RESET:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default postsReducer;
