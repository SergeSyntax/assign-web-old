import { Action } from '../common/types/action.interface';
import { State } from '../common/types/state.interface';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegistrationPayload {
  email: string;
  password: string;
  name: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
}

export interface UsersState extends State<UserData> {
  auth: string | null;
}

export enum UserActionType {
  AUTH_LOGIN = 'auth/login',
  AUTH_REGISTRATION = 'auth/registration',
  AUTH_SUCCESS = 'auth/success',
  AUTH_FAILURE = 'auth/failure',
}

export type LoginAction = Action<UserActionType.AUTH_LOGIN, LoginPayload>;
export type AuthSuccessAction = Action<UserActionType.AUTH_SUCCESS, UserData>;
export type AuthFailureAction = Action<UserActionType.AUTH_FAILURE, string>;
export type RegistrationAction = Action<UserActionType.AUTH_REGISTRATION, RegistrationPayload>;
export type UserAction = LoginAction | AuthSuccessAction | AuthFailureAction | RegistrationAction;
