import { useRouter } from 'next/router';

import useSNSLogin from '@/application/hooks/api/auth/useSNSLogin';
import { ThreeDotsSpinner } from '@/components/common/Spinner';

const KakaoRedirectHandler = () => {
  const router = useRouter();

  const code = router.query.code as string;
  const nextUrl = router.query.nextUrl as string;

  useSNSLogin({ code, provider: 'kakao', nextUrl });

  return <ThreeDotsSpinner />;
};

export default KakaoRedirectHandler;
