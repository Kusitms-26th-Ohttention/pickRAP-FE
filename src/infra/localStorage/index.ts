type LocalStorageKeys = 'accessToken';

class LocalStorage {
  get = <K extends LocalStorageKeys>(keys: K): string | null => {
    return localStorage.getItem(keys);
  };

  set = <K extends LocalStorageKeys>(keys: K, values: string) => {
    return localStorage.setItem(keys, values);
  };
}

export default new LocalStorage();
