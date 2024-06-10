import { all } from 'redux-saga/effects';

import postsSaga from './postsSaga.ts';
import authSaga from './verifySaga.ts';
import userSaga from './userSaga.ts';
import verifySaga from './authSaga.ts';
import addPostSaga from './addPostSaga.ts';
import deletePostSaga from './deletePostSaga.ts';
import editProfileSaga from './editProfileSaga.ts';

function * rootSaga () {
  yield all([
    postsSaga(),
    authSaga(),
    userSaga(),
    verifySaga(),
    addPostSaga(),
    deletePostSaga(),
    editProfileSaga()
  ]);
}

export default rootSaga;
