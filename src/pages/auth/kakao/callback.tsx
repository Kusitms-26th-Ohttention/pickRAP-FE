import { useRouter } from 'next/router';
import { ThreeDotsSpinner } from '@/components/common/Spinner';

import useSNSLogin from '@/application/hooks/api/auth/useSNSLogin';

const KakaoRedirectHandler = () => {
  const router = useRouter();

  const code = router.query.code as string;

  useSNSLogin({ code, provider: 'kakao' });

  return <ThreeDotsSpinner />;
};

export default KakaoRedirectHandler;
