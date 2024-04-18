import { combineReducers, type Reducer } from 'redux';

import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
