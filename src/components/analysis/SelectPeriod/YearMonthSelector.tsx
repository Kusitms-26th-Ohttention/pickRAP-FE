import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

import { useSetCurrentMonth, useSetCurrentYear } from '@/application/store/analysis/analysisHook';

import YearMonthList from './YearMonthList';

interface YearMonthProps {
  custom?: CustomStyle;
  children?: ReactNode;
  selectItem?: boolean;
  period?: string;
  tagYear: number;
  tagMonth: number;
  onClick?: () => void;
}

const YearMonthSelector = ({ custom, children, selectItem, period, tagYear, tagMonth, onClick }: YearMonthProps) => {
  const handleNewYear = useSetCurrentYear();
  const handleNewMonth = useSetCurrentMonth();

  const handleClickPrevBtn = () => {
    if (period === '월별') {
      handleNewMonth(tagMonth - 2);
      if (tagMonth <= 1) {
        handleNewMonth(11);
        handleNewYear(tagYear - 1);
      }
    } else {
      handleNewYear(tagYear - 1);
    }
  };

  const handleClickNextBtn = () => {
    if (period === '월별') {
      handleNewMonth(tagMonth);
      if (tagMonth >= 12) {
        handleNewMonth(0);
        handleNewYear(tagYear + 1);
      }
    } else {
      handleNewYear(tagYear + 1);
    }
  };

  return (
    <>
      <div
        css={[
          css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            place-items: center;
            margin: 12px 0 16px 0;
          `,
          custom,
        ]}
      >
        <span
          onClick={handleClickPrevBtn}
          css={css`
            width: 7px;
            height: 12px;
            transform: rotate(180deg);
            cursor: pointer;
          `}
        >
          <Image src={'/icon/nextMiniArrow.svg'} layout={'fill'} objectFit={'cover'} alt="prevBtn" />
        </span>
        <p
          css={(theme) => css`
            ${theme.font.R_BODY_15};
            font-weight: 700;
            cursor: pointer;
          `}
          onClick={onClick}
        >
          {children}
        </p>
        <span
          onClick={handleClickNextBtn}
          css={css`
            width: 7px;
            height: 12px;
            transform: rotate(360deg);
            cursor: pointer;
          `}
        >
          <Image src={'/icon/nextMiniArrow.svg'} layout={'fill'} objectFit={'cover'} alt="prevBtn" />
        </span>
      </div>
      {selectItem && <YearMonthList year={tagYear} month={tagMonth} period={period} selectItem={selectItem} />}
    </>
  );
};

export default YearMonthSelector;
