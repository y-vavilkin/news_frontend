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
        user: action.payload instanceof Object ? action.payload : null
      };
    case actionTypes.USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.ADD_POST_SUCCESSES:
      return {
        ...state,
        user: state.user !== null
          ? {
            ...state.user,
            posts: [...state.user.posts, action.payload]
          }
          : null
      };
    default:
      return state;
  }
};

export default postsReducer;
