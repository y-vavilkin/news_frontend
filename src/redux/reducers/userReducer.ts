import { UserState, UserAction } from '../../interfaces/user';
import * as actionTypes from '../actions/actionTypes/user';

const initialState: UserState = {
  isLoading: false,
  error: null,
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
        user: action.payload
      };
    case actionTypes.USER_FAILED:
    case actionTypes.ADD_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.ADD_POST_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.ADD_POST_SUCCESSES:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: {
          ...state.user,
          posts: [...state.user.posts, action.payload]
        }

      };
    case actionTypes.ADD_POST_RESET:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default postsReducer;
