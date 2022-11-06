import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { api, setAccessToken } from '@/infra/api';

const KakaoRedirectHandler = () => {
  const router = useRouter();

  const code = router.query.code as string;
  const { data } = useQuery({
    queryKey: ['accessToken', code],
    queryFn: () => api.auth.snsLogin({ code, provider: 'kakao' }),
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

export default KakaoRedirectHandler;
