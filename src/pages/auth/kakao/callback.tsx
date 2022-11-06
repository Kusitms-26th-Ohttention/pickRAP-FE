import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { api, setAccessToken } from '@/infra/api';

const KakaoRedirectHandler = () => {
  const router = useRouter();
  // const setIsLoggedIn = useSetRecoilState(loginState);

  const code = router.query.code as string;
  const { data } = useQuery({
    queryKey: ['accessToken', code],
    queryFn: () => api.auth.snsLogin({ code, provider: 'kakao' }),
    onSuccess: (res) => {
      if (res.headers.authorization) {
        setAccessToken(res.headers.authorization.slice(7));
        // set recoil state
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
