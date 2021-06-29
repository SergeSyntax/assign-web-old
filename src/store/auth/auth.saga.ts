import { fork, call, takeLatest, put } from 'redux-saga/effects';
import { authLoginRequest as userLoginRequest, authRegistrationRequest } from './auth.api';
import { LoginAction, RegistrationAction, UserActionType, UserData } from './auth.type';
import Router from 'next/router';
import { AlertActionType } from 'src/store/alert/alert.type';

function* authFlowSuccess(payload: UserData) {
  yield call(Router.push, '/dashboard');
  yield put({
    type: UserActionType.AUTH_SUCCESS,
    payload,
  });
}

function* authFlowFailure(err: Error) {
  yield put({ type: UserActionType.AUTH_FAILURE, payload: err });
  yield put({ type: AlertActionType.ALERT_REQUEST, payload: err });
}

function* useLogin({ payload }: LoginAction) {
  try {
    const { data } = yield call(userLoginRequest, payload);
    yield call(authFlowSuccess, data);
  } catch (err) {
    yield call(authFlowFailure, err);
  }
}

function* createUser({ payload }: RegistrationAction) {
  try {
    const { data }: ReturnType<typeof authRegistrationRequest> = yield call(
      authRegistrationRequest,
      payload
    );

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
