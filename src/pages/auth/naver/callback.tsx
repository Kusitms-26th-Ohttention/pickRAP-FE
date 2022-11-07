import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { api, setAccessToken } from '@/infra/api';

const NaverRedirectHandler = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const state = router.query.state as string;

  useQuery({
    queryKey: ['accessToken', code, state],
    queryFn: () => api.auth.snsLogin({ code, provider: 'naver', state }),
    onSuccess: (res) => {
      if (res.headers.authorization) {
        const token = res.headers.authorization.slice(7);
        setAccessToken(token);
      }
      router.push('/auth/info');
    },
    onError: () => {
      console.error('로그인 에러');
    },
    enabled: !!code,
  });

  return <>loading...</>;
};

export default NaverRedirectHandler;
