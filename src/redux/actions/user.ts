import { Post } from '../../interfaces/posts';
import {
  AddPost,
  User,
  UserAction
} from '../../interfaces/user';

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

export const addPostRequested = (payload: AddPost): UserAction => ({
  type: actionTypes.ADD_POST_REQUESTED,
  payload
});

export const addPostFailed = (error: string): UserAction => ({
  type: actionTypes.ADD_POST_FAILED,
  error
});

export const addPostSuccesses = (payload: Post): UserAction => ({
  type: actionTypes.ADD_POST_SUCCESSES,
  payload
});
