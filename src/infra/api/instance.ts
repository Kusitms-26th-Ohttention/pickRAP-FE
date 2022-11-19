import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { API_ENDPOINT } from '@/application/utils/constant';
import auth from '@/infra/api/auth';
import { getAccessToken, setAccessToken } from '@/infra/api/token';

interface CustomInstance extends AxiosInstance {
  get<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  delete<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  post<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  put<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  patch<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
}

const instance: CustomInstance = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  headers: {},
});

instance.interceptors.request.use((req) => {
  console.log('👀request :: ', req);
  req.headers!.Authorization = `Bearer ${getAccessToken()}`;
  return req;
});

instance.interceptors.response.use(
  (res) => {
    console.log('✅response :: ', res);
    return res;
  },
  (err) => {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;
      const origin = err.config as AxiosRequestConfig;

      if (status == 401 && origin.url !== '/auth/reissue' && !origin.headers?.retry) {
        return auth.reissue().then((res) => {
          origin.headers!.retry = true;
          if (res.headers.authorization) {
            const token = res.headers.authorization.slice(7);
            origin.headers!.Authorization = `Bearer ${token}`;

            setAccessToken(token);
            return axios.request(origin);
          }
        });
      }
    }
    return Promise.reject(err);
  },
);

export { instance };
