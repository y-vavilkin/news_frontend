import { UserState, UserAction, User } from '../../interfaces/user';
import { Post } from '../../interfaces/posts';
import * as actionTypes from '../actions/actionTypes/user';

const initialState: UserState = {
  isLoading: false,
  isLoadingModal: false,
  isLoadingPost: false,
  error: null,
  user: null,
  userPosts: [],
  postId: -1
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
    case actionTypes.DELETE_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoadingPost: false,
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
    case actionTypes.EDIT_POST_REQUESTED:
      return {
        ...state,
        error: null,
        isLoadingModal: true
      };
    case actionTypes.EDIT_POST_RECEIVED:
      return {
        ...state,
        isLoadingModal: false,
        error: null,
        userPosts: state.userPosts.map(post =>
          post.id === (action.payload as Post).id ? action.payload as Post : post
        )
      };
    case actionTypes.EDIT_PROFILE_RECEIVED:
      return {
        ...state,
        isLoadingModal: false,
        user: action.payload as User
      };
    case actionTypes.ADD_POST_RESET:
    case actionTypes.USER_RESET:
    case actionTypes.EDIT_PROFILE_RESET:
      return {
        ...state,
        error: null
      };
    case actionTypes.DELETE_POST_REQUESTED:
      return {
        ...state,
        isLoadingPost: true,
        postId: action.payload as number
      };
    case actionTypes.DELETE_POST_RECEIVED:
      return {
        ...state,
        isLoadingPost: false,
        userPosts: state.userPosts.filter(post => post.id !== state.postId),
        postId: -1
      };
    case actionTypes.SET_POST_ID:
      return {
        ...state,
        postId: action.payload as number
      };
    default:
      return state;
  }
};

export default postsReducer;
