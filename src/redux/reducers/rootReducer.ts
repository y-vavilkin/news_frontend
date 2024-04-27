import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
  auth: authReducer,
  status: statusReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
