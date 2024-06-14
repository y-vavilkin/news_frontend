import { combineReducers } from 'redux';

import commentsReducer from './commentsReducer';
import postsReducer from './postsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
  auth: authReducer,
  currentUser: userReducer,
  comments: commentsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
