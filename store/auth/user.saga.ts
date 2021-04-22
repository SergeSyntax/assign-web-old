import { AxiosResponse } from 'axios';
import { fork, call, takeLatest, put } from 'redux-saga/effects';
import { authLoginRequest as userLoginRequest, authRegistrationRequest } from './auth.api';
import { authLoginAction, authRegistrationAction, UserActionType, UserData } from './auth.type';
import Router from 'next/router';

function* authFlowSuccess(payload: UserData) {
  yield put({
    type: UserActionType.AUTH_SUCCESS,
    payload,
  });

  yield call(Router.push, '/dashboard');
}

function* authFlowFailure(err: Error) {
  yield call(console.log, err.message);
  // yield console.log(err);
  // yield put({ type: AUTH_FAILURE });
  // yield put(requestAlert(err));
}

function* useLogin({ payload }: authLoginAction) {
  try {
    console.log('happen');

    const { data } = yield call(userLoginRequest, payload);
    yield call(authFlowSuccess, data);
  } catch (err) {
    yield call(authFlowFailure, err);
  }
}

function* createUser({ payload }: authRegistrationAction) {
  try {
    const { data }: AxiosResponse<UserData> = yield call(authRegistrationRequest, payload);

    yield call(authFlowSuccess, data);
  } catch (err) {
    yield call(authFlowFailure, err);
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(UserActionType.AUTH_REGISTRATION, createUser);
}

function* watchUserLoginRequest() {
  yield takeLatest(UserActionType.AUTH_LOGIN, useLogin);
}

export default [fork(watchUserLoginRequest), fork(watchCreateUserRequest)];
