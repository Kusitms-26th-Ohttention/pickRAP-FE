import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { API_ENDPOINT } from '@/application/utils/constant';
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
  async (err) => {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;
      const origin = err.config as AxiosRequestConfig;

      if (status == 401 && !origin.headers?.retry) {
        const res = await instance.post('/auth/reissue', null, { headers: { retry: true } });

        if (res.headers.authorization && res.status === 200) {
          const token = res.headers.authorization.slice(7);
          setAccessToken(token);
          return instance({
            ...origin,
            headers: { ...origin.headers, authorization: `Bearer ${token}`, retry: true },
          });
        }
      }
    }
    return Promise.reject(err);
  },
);

export { instance };
