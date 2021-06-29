import { ActionCreator } from '../common/types/action-creator.type';
import {
  UserActionType,
  RegistrationAction,
  RegistrationPayload,
  LoginPayload,
  LoginAction,
} from './auth.type';

export const authLogin: ActionCreator<LoginPayload, LoginAction> = payload => ({
  type: UserActionType.AUTH_LOGIN,
  payload,
});

export const authRegistration: ActionCreator<RegistrationPayload, RegistrationAction> =
  payload => ({
    type: UserActionType.AUTH_REGISTRATION,
    payload,
  });
