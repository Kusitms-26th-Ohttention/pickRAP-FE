import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import React from 'react';

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
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 4px;
        `,
        custom,
      ]}
    >
      <button
        onClick={onClick}
        css={css`
          position: absolute;
          display: flex;
          align-items: center;
          left: 0;
        `}
      >
        <Image src={'/icon/backArrow.svg'} height={17} width={10} />
      </button>
      <span
        css={(theme) =>
          css`
            ${theme.font.M_POINT_18};
            color: ${theme.color.black02};
            line-height: 26px;
            margin-top: 2px;
          `
        }
      >
        {children}
      </span>
    </nav>
  );
};

export default TopNavigation;
