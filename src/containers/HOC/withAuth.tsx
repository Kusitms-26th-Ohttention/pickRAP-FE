import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { useEffect } from 'react';

import { getAccessToken } from '@/infra/api';

const withAuth = <T extends JSX.IntrinsicAttributes>(Component: NextPage<T> | FC<T>): FC<T> | NextPage<T> =>
  function Wrapped(props) {
    // const { isLogin } = useRecoilValue(userAuthState);
    const isLogin = getAccessToken();
    const router = useRouter();

    useEffect(() => {
      if (!isLogin) {
        router.push('/auth/signin');
      }
    }, [isLogin, router]);

    return <Component {...props} />;
  };

export default withAuth;
