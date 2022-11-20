import { useRouter } from 'next/router';

import useSNSLogin from '@/application/hooks/api/auth/useSNSLogin';
import { ThreeDotsSpinner } from '@/components/common/Spinner';

const KakaoRedirectHandler = () => {
  const router = useRouter();

  const code = router.query.code as string;

  // TODO 로그인 회원가입 경우 분리
  useSNSLogin({ code, provider: 'kakao' });

  return <ThreeDotsSpinner />;
};

export default KakaoRedirectHandler;
