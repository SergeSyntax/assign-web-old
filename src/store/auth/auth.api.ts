import axios from 'axios';
import { AxiosRequest } from '../common/types/axios-request.type';
import { UserData, LoginPayload } from './auth.type';

export const authLoginRequest: AxiosRequest<LoginPayload, UserData> = user =>
  axios.post('api/proxy/auth/login/', user, { withCredentials: true });

export const authRegistrationRequest: AxiosRequest<LoginPayload, UserData> = user =>
  axios.post('api/proxy/auth/registration', user, { withCredentials: true });
