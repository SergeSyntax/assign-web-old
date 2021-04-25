import {
  AlertActionType,
  ClearAlertAction,
  DisplayAlertAction,
  DisplayAlertFailureAction,
  RequestAlertAction,
  RequestAlertPayload,
} from './alert.type';

export const requestAlert = (payload: RequestAlertPayload): RequestAlertAction => ({
  type: AlertActionType.ALERT_REQUEST,
  payload,
});

export const showFailureAlert = (payload: string): DisplayAlertFailureAction => ({
  type: AlertActionType.ALERT_DISPLAY_FAILURE,
  payload,
});

export const displayAlert = (payload: string): DisplayAlertAction => ({
  type: AlertActionType.ALERT_DISPLAY,
  payload,
});

export const clearAlert = (): ClearAlertAction => ({
  type: AlertActionType.ALERT_CLEAR,
});
