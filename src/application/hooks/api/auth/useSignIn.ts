import { useMutation } from '@tanstack/react-query';

import { api } from '@/infra/api';
import type { LoginRequest } from '@/infra/api/types/auth';

const useSignIn = () => useMutation((args: LoginRequest) => api.auth.login(args));
export default useSignIn;
