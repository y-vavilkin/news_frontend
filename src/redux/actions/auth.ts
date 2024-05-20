import { AuthAction, AuthFormData, AuthUser } from '../../interfaces/auth';
import * as actionTypes from './actionTypes/auth';

export const authUser = (payload: AuthFormData): AuthAction => ({
  type: actionTypes.AUTH_USER_REQUESTED,
  payload
});

export const authUserSuccess = (payload: AuthUser): AuthAction => ({
  type: actionTypes.AUTH_USER_SUCCESS,
  payload
});

export const authCheck = (): AuthAction => ({
  type: actionTypes.AUTH_USER_CHECK
});

export const authLogout = (): AuthAction => ({
  type: actionTypes.AUTH_USER_LOGOUT
});

export const authUserFailure = (error: string): AuthAction => ({
  type: actionTypes.AUTH_USER_FAILURE,
  error
});

export const authUserReset = (): AuthAction => ({
  type: actionTypes.AUTH_USER_RESET
});
