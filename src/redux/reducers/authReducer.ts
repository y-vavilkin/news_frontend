import { AuthAction, AuthState } from '../../interfaces/auth';
import { AUTH_USER, AUTH_USER_SUCCESS, AUTH_USER_FAILURE } from '../actionTypes';

const initialState: AuthState = {
  isLoading: false,
  error: null
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default authReducer;
