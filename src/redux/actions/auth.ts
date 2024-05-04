import { AuthAction, AuthForm, User } from '../../interfaces/auth';
import * as actionTypes from './actionTypes/auth';

export const authUserLogin = (payload: AuthForm): AuthAction => ({
  type: actionTypes.AUTH_USER_LOGIN,
  payload
});

export const authUserRegistration = (payload: AuthForm): AuthAction => ({
  type: actionTypes.AUTH_USER_REGISTRATION,
  payload
});

export const authUserSuccess = (payload: User): AuthAction => ({
  type: actionTypes.AUTH_USER_SUCCESS,
  payload
});

export const authCheck = (): AuthAction => ({
  type: actionTypes.AUTH_USER_CHECK
});

export const authReset = (): AuthAction => ({
  type: actionTypes.AUTH_USER_RESET
});

export const authUserFailure = (error: string): AuthAction => ({
  type: actionTypes.AUTH_USER_FAILURE,
  error
});
