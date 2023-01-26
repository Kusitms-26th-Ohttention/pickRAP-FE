import { css } from '@emotion/react';
import Image from 'next/image';

interface SubNavigationProps {
  children: string;
  moreState?: boolean;
  onClick?: () => void;
}

const SubAnaNavigation = ({ children, moreState, onClick }: SubNavigationProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 40px;
      `}
    >
      <p
        css={(theme) => css`
          ${theme.font.M_POINT_15};
          color: ${theme.color.gray05};
        `}
      >
        {children}
      </p>
      {moreState && (
        <button
          onClick={onClick}
          type="button"
          css={(theme) => css`
            position: relative;
            margin-right: 30px;
            ${theme.font.R_BODY_11};
            color: ${theme.color.gray07};
            cursor: pointer;
          `}
        >
          더보기
          <span
            css={css`
              width: 5px;
              height: 9px;
              position: absolute;
              z-index: 1;
              top: 4px;
              right: -16px;
            `}
          >
            <Image src={'/icon/nextMiniArrow.svg'} layout={'fill'} objectFit={'cover'} alt="더보기버튼" />
          </span>
        </button>
      )}
    </div>
  );
};

export default SubAnaNavigation;
