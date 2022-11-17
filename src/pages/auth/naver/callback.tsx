import { useRouter } from 'next/router';

import { ThreeDotsSpinner } from '@/components/common/Spinner';
import useSNSLogin from '@/application/hooks/api/auth/useSNSLogin';

const NaverRedirectHandler = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const state = router.query.state as string;

  useSNSLogin({ code, provider: 'naver', state });

  return <ThreeDotsSpinner />;
};

export default NaverRedirectHandler;
