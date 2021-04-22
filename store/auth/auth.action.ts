import {
  UserActionType,
  authRegistrationAction,
  authRegistrationPayload,
  UserLoginPayload,
  authLoginAction,
} from './auth.type';

export const authLogin = (payload: UserLoginPayload): authLoginAction => ({
  type: UserActionType.AUTH_LOGIN,
  payload,
});

export const authRegistration = (payload: authRegistrationPayload): authRegistrationAction => ({
  type: UserActionType.AUTH_REGISTRATION,
  payload,
});
