import { AuthUser } from '../../interfaces/auth';
import { Post } from '../../interfaces/posts';
import {
  EditProfileRequest,
  PostRequest,
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

export const userReset = (): UserAction => ({
  type: actionTypes.USER_RESET
});

export const addPostRequested = (payload: PostRequest): UserAction => ({
  type: actionTypes.ADD_POST_REQUESTED,
  payload
});

export const addPostFailed = (error: string): UserAction => ({
  type: actionTypes.ADD_POST_FAILED,
  error
});

export const addPostReceived = (payload: Post): UserAction => ({
  type: actionTypes.ADD_POST_RECEIVED,
  payload
});

export const addPostReset = (): UserAction => ({
  type: actionTypes.ADD_POST_RESET
});

export const editProfileRequested = (payload: EditProfileRequest): UserAction => ({
  type: actionTypes.EDIT_PROFILE_REQUESTED,
  payload
});

export const editProfileReceived = (payload: AuthUser): UserAction => ({
  type: actionTypes.EDIT_PROFILE_RECEIVED,
  payload
});

export const editProfileFailed = (error: string): UserAction => ({
  type: actionTypes.EDIT_PROFILE_FAILED,
  error
});

export const editProfileReset = (): UserAction => ({
  type: actionTypes.EDIT_PROFILE_RESET
});

export const deletePostRequested = (payload: number): UserAction => ({
  type: actionTypes.DELETE_POST_REQUESTED,
  payload
});

export const deletePostReceived = (): UserAction => ({
  type: actionTypes.DELETE_POST_RECEIVED
});

export const deletePostFailed = (error: string): UserAction => ({
  type: actionTypes.DELETE_POST_FAILED,
  error
});

export const setIdPost = (payload: number): UserAction => ({
  type: actionTypes.SET_POST_ID,
  payload
});

export const editPostRequested = (payload: PostRequest): UserAction => ({
  type: actionTypes.EDIT_POST_REQUESTED,
  payload
});

export const editPostFailed = (error: string): UserAction => ({
  type: actionTypes.EDIT_POST_FAILED,
  error
});

export const editPostReceived = (payload: Post): UserAction => ({
  type: actionTypes.EDIT_POST_RECEIVED,
  payload
});
