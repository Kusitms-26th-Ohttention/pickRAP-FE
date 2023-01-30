import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface AnaNavigationProps {
  children: ReactNode;
  backArrowState?: boolean;
  onClick?: () => void;
}

const AnalysisNavigation = ({ children, backArrowState, onClick }: AnaNavigationProps) => {
  return (
    <>
      <nav
        css={(theme) => css`
          position: absolute;
          width: 100%;
          ${theme.font.M_POINT_16};
          color: ${theme.color.black02};
          background-color: white;
          z-index: 5;
        `}
      >
        {backArrowState ? (
          <span
            onClick={onClick}
            css={css`
              width: 10px;
              height: 17px;
              position: absolute;
              z-index: 1;
              top: 27px;
            `}
          >
            <Image src={'/icon/backArrow.svg'} layout={'fill'} objectFit={'cover'} alt="뒤로가기" />
          </span>
        ) : (
          ''
        )}
        <p
          css={css`
            display: flex;
            justify-content: center;
            margin: 28px 0 18px 0;
          `}
        >
          {children}
        </p>
        <div
          css={(theme) =>
            css`
              border: 1px solid ${theme.color.gray09};
            `
          }
        />
      </nav>
    </>
  );
};

export default AnalysisNavigation;
