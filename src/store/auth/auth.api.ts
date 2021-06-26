import axios, { AxiosResponse } from 'axios';
import { UserData, loginPayload } from './auth.type';

export const authLoginRequest = (user: loginPayload): Promise<AxiosResponse<UserData>> =>
  axios.post('api/proxy/auth/login/', user, { withCredentials: true });

export const authRegistrationRequest = (user: loginPayload): Promise<AxiosResponse<UserData>> =>
  axios.post('api/proxy/auth/registration', user, { withCredentials: true });
