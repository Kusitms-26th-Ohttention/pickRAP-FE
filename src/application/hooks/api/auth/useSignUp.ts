import { useMutation } from '@tanstack/react-query';

import { api } from '@/infra/api';

const useSignUp = <T extends Parameters<typeof api.auth.signup>[0]>() =>
  useMutation((args: T) => api.auth.signup(args));
export default useSignUp;
