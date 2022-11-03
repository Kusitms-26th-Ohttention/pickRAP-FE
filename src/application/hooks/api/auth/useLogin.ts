import { useCallback } from 'react';

import { api, setAccessToken } from '@/infra/api';

interface UseLoginOptions {
  onSuccess?: (...args: any[]) => void;
  onFail?: (...args: any[]) => void;
}

export const useLogin = ({ onSuccess, onFail }: UseLoginOptions) =>
  useCallback(async () => {
    try {
      const { data } = await api.auth.login();
      setAccessToken(data.token);
      onSuccess?.();
    } catch {
      onFail?.();
    }
  }, [onFail, onSuccess]);
