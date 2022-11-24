import { useMutation } from '@tanstack/react-query';

import { api, setAccessToken } from '@/infra/api';

const useSignUp = <T extends Parameters<typeof api.auth.signup>[0]>() =>
  useMutation((args: T) => api.auth.signup(args), {
    onSuccess: (data) => {
      if (data.headers.authorization) {
        const token = data.headers.authorization.slice(7);
        setAccessToken(token);
      }
    },
  });
export default useSignUp;
