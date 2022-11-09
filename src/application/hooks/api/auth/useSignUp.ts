import { useMutation } from '@tanstack/react-query';

import { api } from '@/infra/api';
import type { LoginRequest } from '@/infra/api/types/auth';

const useSignUp = () => useMutation((args: LoginRequest) => api.auth.signup(args));
export default useSignUp;
