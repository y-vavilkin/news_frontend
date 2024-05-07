import { UserState, UserAction } from '../../interfaces/user';
import * as actionTypes from '../actions/actionTypes/user';

const initialState: UserState = {
  isLoading: false,
  error: null,
  userPosts: null,
  user: null
};

const postsReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case actionTypes.USER_REQUESTED:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case actionTypes.USER_RECEIVED:
      return {
        ...state,
        isLoading: false,
        user: action.payload instanceof Object ? action.payload : null,
        userPosts: action.payload instanceof Object ? action.payload.posts : null
      };
    case actionTypes.USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    default:
      return state;
  }
};

export default postsReducer;
