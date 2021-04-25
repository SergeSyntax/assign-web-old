import { fork, put, takeEvery } from 'redux-saga/effects';
import { showFailureAlert } from './alert.action';
import { AlertActionType, RequestAlertAction } from './alert.type';

function* failureAlert({ payload }: RequestAlertAction) {
  const { response, name, message } = payload;

  console.log(response);

  if (/[45]\d\d/.test(message)) yield put(showFailureAlert(response?.data?.message));
  else if (name && message) yield put(showFailureAlert(`${name}: ${message}`));
}

function* watchErrors() {
  yield takeEvery(AlertActionType.ALERT_REQUEST, failureAlert);
}

export default [fork(watchErrors)];
