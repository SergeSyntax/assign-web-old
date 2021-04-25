import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import authSaga from './auth/auth.saga';
import alertSaga from './alert/alert.saga';

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
  yield all([...authSaga, ...alertSaga]);
}

export default rootSaga;
