import { useRouter } from 'next/router';

import useSNSLogin from '@/application/hooks/api/auth/useSNSLogin';

const NaverRedirectHandler = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const state = router.query.state as string;

  useSNSLogin({ code, provider: 'naver', state });

  return <>loading...</>;
};

export default NaverRedirectHandler;
