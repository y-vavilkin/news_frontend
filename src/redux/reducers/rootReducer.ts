import { combineReducers } from 'redux';

import addPostReducer from './addPostReducer';
import postsReducer from './postsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
  auth: authReducer,
  currentUser: userReducer,
  addPost: addPostReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
