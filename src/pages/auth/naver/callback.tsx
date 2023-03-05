import { useRouter } from 'next/router';

import useSNSLogin from '@/application/hooks/api/auth/useSNSLogin';
import { ThreeDotsSpinner } from '@/components/common/Spinner';

const NaverRedirectHandler = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const state = router.query.state as string;
  const nextUrl = router.query.nextUrl as string;

  useSNSLogin({ code, provider: 'naver', state, nextUrl });

  return <ThreeDotsSpinner />;
};

export default NaverRedirectHandler;
