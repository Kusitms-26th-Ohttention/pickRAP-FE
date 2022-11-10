import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

import TopNavigation from '@/components/common/Navigation/TopNavigation';

interface WithNavigationOptions {
  title: string;
  backUrl: string;
  isMiddle?: boolean;
}

const withNavigation = <T extends JSX.IntrinsicAttributes>(
  { title, backUrl, isMiddle }: WithNavigationOptions,
  Component: NextPage<T> | FC<T>,
): FC<T> | NextPage<T> =>
  function Wrapped(props) {
    const router = useRouter();
    return (
      <>
        <TopNavigation
          onClick={() => router.push(backUrl)}
          custom={
            !isMiddle &&
            css`
              justify-content: flex-start;
              padding-left: 30px;
            `
          }
        >
          {title}
        </TopNavigation>
        <Component {...props} />
      </>
    );
  };

export default withNavigation;
