import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import React from 'react';

import type { CustomStyle } from '@/types';

interface TopNavigationProps {
  custom?: CustomStyle;
  children: ReactNode;
  onClick?: () => any;
}

const TopNavigation = ({ custom, onClick, children }: TopNavigationProps) => {
  return (
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
        custom,
      ]}
    >
      <button
        onClick={onClick}
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
        {children}
      </p>
    </nav>
  );
};

export default TopNavigation;
