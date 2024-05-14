import { AddPost, AddPostAction } from '../../interfaces/addPost';
import { Post } from '../../interfaces/posts';

import * as actionTypes from './actionTypes/user';

export const addPostRequested = (payload: AddPost): AddPostAction => ({
  type: actionTypes.ADD_POST_REQUESTED,
  payload
});

export const addPostFailed = (error: string): AddPostAction => ({
  type: actionTypes.ADD_POST_FAILED,
  error
});

export const addPostSuccesses = (payload: Post): AddPostAction => ({
  type: actionTypes.ADD_POST_SUCCESSES,
  payload
});
