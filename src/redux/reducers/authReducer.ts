import { AuthAction, AuthState } from '../../types';
import { AUTH_USER, AUTH_USER_SUCCESS, AUTH_USER_FAILURE } from '../actionTypes';

const initialState: AuthState = {
  isOnline: false,
  isLoading: false,
  error: null
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isOnline: false,
        isLoading: true
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isOnline: true,
        error: null
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isOnline: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default authReducer;
