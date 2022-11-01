import axios from 'axios';

import LocalStorage from '@/infra/localStorage';

const accessToken = { current: typeof window === 'undefined' ? null : LocalStorage.get('accessToken') };
const setAccessToken = (t: string) => {
  LocalStorage.set('accessToken', t);
  accessToken.current = t;
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true,
  headers: {},
});

instance.interceptors.request.use((req) => {
  console.log('👀request :: ', req);
  req.headers!.Authorization = `Bearer ${accessToken.current}`;
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
      } else {
        return err;
      }
    }
  },
);

export { instance, setAccessToken };
