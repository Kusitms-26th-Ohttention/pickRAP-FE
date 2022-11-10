import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

interface WithNavigationOptions {
  title: string;
  backUrl: string;
  isMiddle?: boolean;
}

const withNavigation = <T extends JSX.IntrinsicAttributes>(
  options: WithNavigationOptions,
  Component: NextPage<T> | FC<T>,
): FC<T> | NextPage<T> =>
  function Wrapped(props) {
    const router = useRouter();
    return (
      <>
        <nav
          css={[
            css`
              margin-top: 12px;
              height: 48px;
              width: 100%;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
            `,
            !options.isMiddle &&
              css`
                justify-content: flex-start;
                padding-left: 30px;
              `,
          ]}
        >
          <button
            onClick={() => router.push(options.backUrl)}
            css={css`
              position: absolute;
              left: 0;
            `}
          >
            <Image src={'/icon/backArrow.svg'} height={17} width={10} />
          </button>
          <p
            css={(theme) =>
              css`
                ${theme.font.M_POINT_18};
                color: ${theme.color.black02};
              `
            }
          >
            {options.title}
          </p>
        </nav>

        <Component {...props} />
      </>
    );
  };

export default withNavigation;
