import { useRouter } from 'next/router';

import useSNSLogin from '@/application/hooks/api/auth/useSNSLogin';

const KakaoRedirectHandler = () => {
  const router = useRouter();

  const code = router.query.code as string;

  useSNSLogin({ code, provider: 'kakao' });

  return <>loading...</>;
};

export default KakaoRedirectHandler;
