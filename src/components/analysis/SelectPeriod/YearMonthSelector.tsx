import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface YaerMonthProps {
  custom?: CustomStyle;
  children?: ReactNode;
}

const YearMonthSelector = ({ custom, children }: YaerMonthProps) => {
  return (
    <div
      css={[
        css`
          display: flex;
          position: relative;
          margin: 12px 0 16px 0;
        `,
        custom,
      ]}
    >
      <span
        css={css`
          width: 7px;
          height: 12px;
          position: absolute;
          z-index: 1;
          top: 2px;
          left: 0;
          transform: rotate(180deg);
        `}
      >
        <Image src={'/icon/nextMiniArrow.svg'} layout={'fill'} objectFit={'cover'} alt="더보기버튼" />
      </span>
      <p
        css={(theme) => css`
          position: absolute;
          ${theme.font.R_BODY_15};
          font-weight: 700;
          left: 23px;
        `}
      >
        {children}
      </p>
      <span
        css={css`
          width: 7px;
          height: 12px;
          position: absolute;
          z-index: 1;
          top: 2px;
          right: 0;
        `}
      >
        <Image src={'/icon/nextMiniArrow.svg'} layout={'fill'} objectFit={'cover'} alt="더보기버튼" />
      </span>
    </div>
  );
};

export default YearMonthSelector;
