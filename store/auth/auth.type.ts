export interface loginPayload {
  email: string;
  password: string;
}

export interface authRegistrationPayload {
  email: string;
  password: string;
  name: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
}

export interface UsersState {
  loading: boolean;
  error: string | null;
  auth: string | null;
  data: UserData;
}

export enum UserActionType {
  AUTH_LOGIN = 'auth/login',
  AUTH_REGISTRATION = 'auth/registration',
  AUTH_SUCCESS = 'auth/success',
  AUTH_FAILURE = 'auth/failure',
}

export interface authRegistrationAction {
  type: UserActionType.AUTH_REGISTRATION;
  payload: authRegistrationPayload;
}

export interface loginAction {
  type: UserActionType.AUTH_LOGIN;
  payload: loginPayload;
}

export interface authSuccessAction {
  type: UserActionType.AUTH_SUCCESS;
  payload: UserData;
}

export interface authFailureAction {
  type: UserActionType.AUTH_FAILURE;
  payload: string;
}

export type UserAction =
  | loginAction
  | authSuccessAction
  | authFailureAction
  | authRegistrationAction;
