import { AuthAction, AuthState, AuthUser } from '../../interfaces/auth';
import * as actionTypes from '../actions/actionTypes/auth';
import { TOKEN } from '../../constants';

const initialState: AuthState = {
  isOnline: false,
  isLoading: false,
  error: null,
  authUser: null
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case actionTypes.AUTH_USER_CHECK:
    case actionTypes.AUTH_USER_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.AUTH_USER_RECEIVED:
      return {
        ...state,
        isLoading: false,
        isOnline: true,
        error: null,
        authUser: action.payload as AuthUser
      };
    case actionTypes.AUTH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.AUTH_USER_LOGOUT:
    case actionTypes.AUTH_USER_RESET: {
      localStorage.removeItem(TOKEN);
      return {
        ...state,
        error: null,
        authUser: null,
        isOnline: false
      };
    }
    case actionTypes.EDIT_PROFILE_RECEIVED:
      return {
        ...state,
        authUser: action.payload as AuthUser
      };
    default:
      return state;
  }
};

export default authReducer;
