import axios, { AxiosResponse } from 'axios';
import { UserData, UserLoginPayload } from './auth.type';

export const authLoginRequest = (user: UserLoginPayload): Promise<AxiosResponse<UserData>> =>
  axios.post('api/proxy/auth/login/', user, { withCredentials: true });

export const authRegistrationRequest = (user: UserLoginPayload): Promise<AxiosResponse<UserData>> =>
  axios.post('api/proxy/auth/registration', user, { withCredentials: true });
