import { AuthAction, AuthState } from '../../interfaces/auth';
import * as actionTypes from '../actions/actionTypes/auth';

const initialState: AuthState = {
  isOnline: false,
  isLoading: false,
  error: null,
  user: null
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case actionTypes.AUTH_USER_CHECK: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionTypes.AUTH_USER_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.AUTH_USER_REGISTRATION:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.AUTH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isOnline: true,
        // TODO
        user: action.payload ?? null
      };
    case actionTypes.AUTH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.AUTH_USER_RESET:
      return {
        ...state,
        error: null,
        user: null,
        isOnline: false
      };
    default:
      return state;
  }
};

export default authReducer;
