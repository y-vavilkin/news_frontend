import { UserState, UserAction } from '../../interfaces/user';
import * as actionTypes from '../actions/actionTypes/user';

const initialState: UserState = {
  isLoading: false,
  error: null,
  id: null,
  user: null
};

export default function postsReducer (state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case actionTypes.USER_REQUESTED:
      return {
        ...state,
        // TODO
        id: action.payload ?? null,
        isLoading: true
      };
    case actionTypes.USER_RECEIVED:
      return {
        ...state,
        isLoading: false,
        // TODO
        user: action.payload ?? null
      };
    case actionTypes.USER_FAILED:
      return {
        ...state,
        id: null,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.USER_RESET: {
      return {
        ...state,
        id: null,
        isLoading: false,
        error: null,
        user: null
      };
    }
    default:
      return state;
  }
}
