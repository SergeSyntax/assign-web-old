export interface UserLoginPayload {
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

export interface authLoginAction {
  type: UserActionType.AUTH_LOGIN;
  payload: UserLoginPayload;
}

export interface UserLoginSuccessAction {
  type: UserActionType.AUTH_SUCCESS;
  payload: UserData;
}

export interface UserLoginErrorAction {
  type: UserActionType.AUTH_FAILURE;
  payload: string;
}

export interface authRegistrationAction {
  type: UserActionType.AUTH_REGISTRATION;
  payload: authRegistrationPayload;
}

export interface authRegistrationSuccessAction {
  type: UserActionType.AUTH_REGISTRATION_SUCCESS;
  payload: UserData;
}

export interface authRegistrationErrorAction {
  type: UserActionType.AUTH_REGISTRATION_FAILURE;
  payload: string;
}

export type UserAction =
  | authLoginAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | authRegistrationAction
  | authRegistrationSuccessAction
  | authRegistrationErrorAction;
