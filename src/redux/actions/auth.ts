import { AuthAction, Auth } from '../../types';
import { AUTH_USER, AUTH_USER_SUCCESS, AUTH_USER_FAILURE } from '../actionTypes';

export const authUser = (payload: Auth): AuthAction => ({
  type: AUTH_USER,
  payload
});

export const authUserSuccess = (): AuthAction => ({
  type: AUTH_USER_SUCCESS
});

export const authUserFailure = (error: string): AuthAction => ({
  type: AUTH_USER_FAILURE,
  error
});
