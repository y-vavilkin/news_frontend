import { all } from 'redux-saga/effects';

import postsSaga from './postsSaga.ts';
import authSaga from './authSaga.ts';

function * rootSaga () {
  yield all([
    postsSaga(),
    authSaga()
  ]);
}

export default rootSaga;
