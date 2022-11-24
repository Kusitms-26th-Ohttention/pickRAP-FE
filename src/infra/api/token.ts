import { LOCAL_STORAGE_KEYS } from '@/application/utils/constant';
import LocalStorage from '@/infra/localStorage';

const accessToken = { current: typeof window === 'undefined' ? null : LocalStorage.get(LOCAL_STORAGE_KEYS.TOKEN) };
export const setAccessToken = (t: string) => {
  LocalStorage.set(LOCAL_STORAGE_KEYS.TOKEN, t);
  accessToken.current = t;
};
export const removeAccessToken = () => {
  LocalStorage.remove(LOCAL_STORAGE_KEYS.TOKEN);
  accessToken.current = null;
};
export const getAccessToken = () => accessToken.current;
