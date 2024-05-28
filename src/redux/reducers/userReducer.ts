import { UserState, UserAction, User } from '../../interfaces/user';
import { Post } from '../../interfaces/posts';
import * as actionTypes from '../actions/actionTypes/user';

const initialState: UserState = {
  isLoading: false,
  isLoadingModal: false,
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
        isLoading: true
      };
    case actionTypes.EDIT_PROFILE_REQUESTED:
      return {
        ...state,
        error: null,
        isLoadingModal: true
      };
    case actionTypes.USER_RECEIVED:
      return {
        ...state,
        isLoading: false,
        user: action.payload as User,
        userPosts: (action.payload as User).posts
      };
    case actionTypes.USER_FAILED:
    case actionTypes.ADD_POST_FAILED:
    case actionTypes.EDIT_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoadingModal: false,
        error: action.error ?? null
      };
    case actionTypes.ADD_POST_REQUESTED:
      return {
        ...state,
        error: null,
        isLoadingModal: true
      };
    case actionTypes.ADD_POST_RECEIVED:
      return {
        ...state,
        isLoadingModal: false,
        error: null,
        userPosts: [action.payload as Post, ...state.userPosts]
      };
    case actionTypes.EDIT_PROFILE_RECEIVED: {
      return {
        ...state,
        isLoadingModal: false,
        user: {
          ...state.user!,
          login: (action.payload as User).login,
          avatarUrl: (action.payload as User).avatarUrl
        }
      };
    }
    case actionTypes.ADD_POST_RESET:
    case actionTypes.USER_RESET:
    case actionTypes.EDIT_PROFILE_RESET:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default postsReducer;
