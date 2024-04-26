import { call, put, takeLatest } from 'redux-saga/effects';

import { TOKEN } from '../../constants';
import { checkUserStatusSuccess, checkUserStatusFailure } from '../actions/status';
import { CHECK_USER_STATUS, NOT_FOUND_TOKEN } from '../actionTypes';
import status from '../api/status';

function * checkUserStatusSaga () {
  try {
    const token = localStorage.getItem(TOKEN);

    if (token === null) {
      throw new Error(NOT_FOUND_TOKEN);
    }

    yield call(status, token);

    yield put(checkUserStatusSuccess());
  } catch (error) {
    localStorage.removeItem(TOKEN);

    yield put(checkUserStatusFailure());
  }
}

function * rootSaga () {
  yield takeLatest(CHECK_USER_STATUS, checkUserStatusSaga);
}

export default rootSaga;
