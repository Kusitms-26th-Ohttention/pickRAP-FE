import type { LOCAL_STORAGE_KEYS } from '@/application/utils/constant';

type LocalStorageKeys = typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS];

class LocalStorage {
  get = <K extends LocalStorageKeys>(keys: K): string | null => {
    return localStorage.getItem(keys);
  };

  set = <K extends LocalStorageKeys>(keys: K, values: string) => {
    return localStorage.setItem(keys, values);
  };

  remove = <K extends LocalStorageKeys>(keys: K) => {
    return localStorage.removeItem(keys);
  };
}

export default new LocalStorage();
