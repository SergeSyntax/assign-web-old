import { AxiosError } from 'axios';

export enum AlertActionType {
  ALERT_REQUEST = 'alert/request',
  ALERT_DISPLAY = 'alert/display',
  ALERT_DISPLAY_FAILURE = 'alert/display_failure',
  ALERT_CLEAR = 'alert/clear',
}

export interface AlertState {
  relevant: boolean;
  error: boolean;
  message: string;
}

export type RequestAlertPayload = AxiosError;

export interface RequestAlertAction {
  type: AlertActionType.ALERT_REQUEST;
  payload: RequestAlertPayload;
}

export interface DisplayAlertFailureAction {
  type: AlertActionType.ALERT_DISPLAY_FAILURE;
  payload: string;
}

export interface DisplayAlertAction {
  type: AlertActionType.ALERT_DISPLAY;
  payload: string;
}

export interface ClearAlertAction {
  type: AlertActionType.ALERT_CLEAR;
}

export type AlertAction = DisplayAlertFailureAction | DisplayAlertAction | ClearAlertAction;
