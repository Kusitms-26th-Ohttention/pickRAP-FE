import axios from 'axios';

import { API_ENDPOINT } from '@/application/utils/constant';
import { getAccessToken } from '@/infra/api/token';

const instance = axios.create({
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
      const status = err.response?.status || -1;
      if (status == 401 && err.config && !err.config.headers!.retry) {
        const origin = err.config;
        origin.headers!.retry = true;
        // authApi.refresh().then((res) => {
        //   const { token } = res.data;
        //   setAccessToken(token);
        //   origin.headers!.Authorization = `Bearer ${token}`;
        //   return axios(origin);
        // });
      }
    }
    throw err;
  },
);

export { instance };
