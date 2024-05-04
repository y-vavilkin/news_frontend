import { User } from '../../interfaces/auth';
import { UserAction } from '../../interfaces/user';
import * as actionTypes from './actionTypes/user';

export const userRequest = (payload: number): UserAction => ({
  type: actionTypes.USER_REQUESTED,
  payload
});

export const userReceived = (payload: User): UserAction => ({
  type: actionTypes.USER_RECEIVED,
  payload
});

export const userFailed = (error: string): UserAction => ({
  type: actionTypes.USER_FAILED,
  error
});

export const userReset = (): UserAction => ({
  type: actionTypes.USER_RESET
});
