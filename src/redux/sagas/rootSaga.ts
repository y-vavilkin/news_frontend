import { all } from 'redux-saga/effects';

import postsSaga from './postsSaga.ts';
import authSaga from './authSaga.ts';
import statusSaga from './statusSaga.ts';

function * rootSaga () {
  yield all([
    postsSaga(),
    authSaga(),
    statusSaga()
  ]);
}

export default rootSaga;
