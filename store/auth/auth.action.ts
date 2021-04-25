import {
  UserActionType,
  authRegistrationAction,
  authRegistrationPayload,
  loginPayload,
  loginAction,
} from './auth.type';

export const authLogin = (payload: loginPayload): loginAction => ({
  type: UserActionType.AUTH_LOGIN,
  payload,
});

export const authRegistration = (payload: authRegistrationPayload): authRegistrationAction => ({
  type: UserActionType.AUTH_REGISTRATION,
  payload,
});
