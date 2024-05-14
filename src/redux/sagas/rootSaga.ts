import { all } from 'redux-saga/effects';

import postsSaga from './postsSaga.ts';
import authSaga from './verifySaga.ts';
import userSaga from './userSaga.ts';
import verifySaga from './authSaga.ts';
import addPostSaga from './addPostSaga.ts';

function * rootSaga () {
  yield all([
    postsSaga(),
    authSaga(),
    userSaga(),
    verifySaga(),
    addPostSaga()
  ]);
}

export default rootSaga;
