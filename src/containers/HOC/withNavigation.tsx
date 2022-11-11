import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

import { BottomNavigation, TopNavigation } from '@/components/common/Navigation';

interface WithNavigationOptions {
  TopNav?: { title: string; backUrl: string; isMiddle?: boolean };
  BottomNav?: FC | null;
}

/**
 * @todo
 * Navigation Layout Component 로 refactor
 * HOC --> child props 활용
 */
const withNavigation = <T extends JSX.IntrinsicAttributes>(
  Component: NextPage<T> | FC<T>,
  options: WithNavigationOptions = {},
): FC<T> | NextPage<T> =>
  function Wrapped(props) {
    const router = useRouter();
    return (
      <>
        {options.TopNav && (
          <TopNavigation
            onClick={() => router.push(options.TopNav!.backUrl)}
            custom={
              !options.TopNav.isMiddle &&
              css`
                justify-content: flex-start;
                padding-left: 30px;
              `
            }
          >
            {options.TopNav.title}
          </TopNavigation>
        )}

        <Component {...props} />
        {options.BottomNav ? <options.BottomNav /> : options.BottomNav === null ? null : <BottomNavigation />}
      </>
    );
  };

export default withNavigation;
