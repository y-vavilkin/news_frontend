import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
