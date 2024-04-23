import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
