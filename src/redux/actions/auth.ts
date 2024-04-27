import { AuthAction, AuthPayload } from '../../interfaces/auth';
import { AUTH_USER, AUTH_USER_SUCCESS, AUTH_USER_FAILURE, AUTH_USER_RESET } from '../actionTypes';

export const authUser = (payload: AuthPayload): AuthAction => ({
  type: AUTH_USER,
  payload: {
    authData: payload.authData,
    error: null
  }
});

export const authUserSuccess = (): AuthAction => ({
  type: AUTH_USER_SUCCESS,
  payload: {
    authData: null,
    error: null
  }
});

export const authUserFailure = (payload: AuthPayload): AuthAction => ({
  type: AUTH_USER_FAILURE,
  payload: {
    authData: null,
    error: payload.error
  }
});

export const authResetError = (): AuthAction => ({
  type: AUTH_USER_RESET,
  payload: {
    authData: null,
    error: null
  }
});
