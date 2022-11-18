import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { useState } from 'react';

import { BottomNavigation, TopNavigation } from '@/components/common/Navigation';
import type { BottomNavigationState } from '@/containers/HOC/NavigationContext';
import { BottomNavigationContext } from '@/containers/HOC/NavigationContext';

interface WithNavigationOptions {
  TopNav?: { title: string; backUrl: string; isMiddle?: boolean };
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
    const [adaptor, setAdaptor] = useState<BottomNavigationState>('default');
    return (
      <BottomNavigationContext.Provider value={[adaptor, setAdaptor]}>
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
        {adaptor === 'default' ? <BottomNavigation /> : adaptor === null ? null : adaptor}
      </BottomNavigationContext.Provider>
    );
  };

export default withNavigation;
