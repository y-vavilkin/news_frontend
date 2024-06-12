import { all } from 'redux-saga/effects';

import userSaga from './userSaga.ts';
import postsSaga from './postsSaga.ts';
import authSaga from './verifySaga.ts';
import verifySaga from './authSaga.ts';
import addPostSaga from './addPostSaga.ts';
import editPostSaga from './editPostSaga.ts';
import commentsSaga from './commentsSaga.ts';
import addCommentSaga from './addCommentSaga.ts';
import deletePostSaga from './deletePostSaga.ts';
import editProfileSaga from './editProfileSaga.ts';

function * rootSaga () {
  yield all([
    authSaga(),
    userSaga(),
    postsSaga(),
    verifySaga(),
    addPostSaga(),
    editPostSaga(),
    commentsSaga(),
    addCommentSaga(),
    deletePostSaga(),
    editProfileSaga()
  ]);
}

export default rootSaga;
