import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import type { APIResponse } from '@/types/index';

interface APIResponse<T = Record<string, never>> {
  code: number;
  data: T;
  message: string;
}
interface AxiosInstance {
  get<T = any, R = AxiosResponse<APIResponse<T>>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  delete<T = any, R = AxiosResponse<APIResponse<T>>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  post<T = any, R = AxiosResponse<APIResponse<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  put<T = any, R = AxiosResponse<APIResponse<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  patch<T = any, R = AxiosResponse<APIResponse<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
}
