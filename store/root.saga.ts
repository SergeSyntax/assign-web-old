import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import usersSaga from './auth/user.saga';

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
  yield all([...usersSaga]);
}

export default rootSaga;
