import { all } from 'redux-saga/effects';

import postsSaga from './postsSaga.ts';
import authSaga from './authSaga.ts';
import userSaga from './userSaga.ts';
import verifySaga from './verifySaga.ts';

function * rootSaga () {
  yield all([
    postsSaga(),
    authSaga(),
    userSaga(),
    verifySaga()
  ]);
}

export default rootSaga;
