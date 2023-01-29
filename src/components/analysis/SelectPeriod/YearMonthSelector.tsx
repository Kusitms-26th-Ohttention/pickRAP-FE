import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

import { currentMonth, currentYear } from '@/application/store/analysis/analysisState';

import YearMonthList from './YearMonthList';

interface YearMonthProps {
  custom?: CustomStyle;
  children?: ReactNode;
  selectItem?: boolean;
  period?: string;
  onClick?: () => void;
}

const YearMonthSelector = ({ custom, children, selectItem, period, onClick }: YearMonthProps) => {
  const [year, setYear] = useRecoilState(currentYear);
  const [month, setMonth] = useRecoilState(currentMonth);

  console.log('선택', selectItem);

  const handleClickPrevBtn = () => {
    if (period === '월별') {
      setMonth(month - 1);
      if (month < 1) {
        setYear(year - 1);
        setMonth(11);
      }
    } else {
      setYear(year - 1);
    }
  };

  const handleClickNextBtn = () => {
    if (period === '월별') {
      setMonth(month + 1);
      if (month > 10) {
        setYear(year + 1);
        setMonth(0);
      }
    } else {
      setYear(year + 1);
    }
  };

  return (
    <>
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
          onClick={handleClickPrevBtn}
          css={css`
            width: 7px;
            height: 12px;
            position: absolute;
            z-index: 1;
            top: 2px;
            left: 0;
            transform: rotate(180deg);
            cursor: pointer;
          `}
        >
          <Image src={'/icon/nextMiniArrow.svg'} layout={'fill'} objectFit={'cover'} alt="prevBtn" />
        </span>
        <p
          css={(theme) => css`
            position: absolute;
            ${theme.font.R_BODY_15};
            font-weight: 700;
            left: 23px;
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
            position: absolute;
            z-index: 1;
            top: 2px;
            right: 0;
            cursor: pointer;
          `}
        >
          <Image src={'/icon/nextMiniArrow.svg'} layout={'fill'} objectFit={'cover'} alt="nextBtn" />
        </span>
        {/* 날짜 선택 박스 */}
      </div>
      {selectItem && <YearMonthList />}
    </>
  );
};

export default YearMonthSelector;
