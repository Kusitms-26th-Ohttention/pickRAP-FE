import { useMutation } from '@tanstack/react-query';

import { api, setAccessToken } from '@/infra/api';
import type { LoginRequest } from '@/infra/api/types/auth';

const useSignIn = () =>
  useMutation((args: LoginRequest) => api.auth.login(args), {
    onSuccess: (data) => {
      if (data.headers.authorization) {
        const token = data.headers.authorization.slice(7);
        setAccessToken(token);
      }
    },
  });
export default useSignIn;
