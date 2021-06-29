import { AxiosResponse } from 'axios';

/**
 * a common post request type
 * @param P the payload data of the post request
 * @param D the data that received from the response
 */
export type AxiosRequest<P, D> = (payload?: P) => AxiosResponse<D>;
