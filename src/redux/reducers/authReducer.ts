import { AuthAction, AuthState } from '../../interfaces/auth';
import * as actionTypes from '../actions/actionTypes/auth';

const initialState: AuthState = {
  isOnline: false,
  isLoading: false,
  error: null,
  authUser: null
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case actionTypes.AUTH_USER_CHECK:
    case actionTypes.AUTH_USER_LOGIN:
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
        error: null,
        authUser: action.payload ?? null
      };
    case actionTypes.AUTH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.AUTH_USER_LOGOUT:
    case actionTypes.AUTH_USER_RESET:
      return {
        ...state,
        error: null,
        authUser: null,
        isOnline: false
      };
    default:
      return state;
  }
};

export default authReducer;
