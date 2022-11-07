import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { api, setAccessToken } from '@/infra/api';

interface UseSNSLoginProps {
  code: string;
  provider: 'naver' | 'kakao';
  state?: string;
}

const useSNSLogin = ({ code, provider, state }: UseSNSLoginProps) => {
  const router = useRouter();
  useQuery({
    queryKey: ['accessToken', code, provider, state],
    queryFn: () => api.auth.snsLogin({ code, provider, state }),
    onSuccess: (res) => {
      if (res.headers.authorization) {
        const token = res.headers.authorization.slice(7);
        setAccessToken(token);
      }
      router.push('/auth/complete');
    },
    onError: () => {
      console.error('로그인 에러');
    },
    enabled: !!code,
  });
};

export default useSNSLogin;
