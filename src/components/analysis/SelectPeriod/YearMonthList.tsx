import type { CustomStyle, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { useSetCurrentMonth, useSetCurrentYear } from '@/application/store/analysis/analysisHook';

interface YearMonthListProps {
  custom?: CustomStyle;
  year: number;
  month: number;
  period?: string;
  selectItem?: boolean;
}

const YearMonthList = ({ custom, year, month, period, selectItem }: YearMonthListProps) => {
  const yearList = [2019, 2020, 2021, 2022, 2023];
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // for (let currentYear = year - 4; currentYear <= year; currentYear++) {
  //   yearList.push(currentYear);
  // }

  const handleClickYear = useSetCurrentYear();
  const handleClickMonth = useSetCurrentMonth();

  return (
    <div css={[YearMonthBoxWrap, custom]}>
      {period === '연별' ? (
        <div css={YearMonthBox}>
          {yearList.map((item, idx) => (
            <p key={idx} css={YearTextActive(item, year)} onClick={() => handleClickYear(item)}>
              {item}
            </p>
          ))}
        </div>
      ) : (
        <>
          <div
            css={css`
              position: relative;
              width: 100%;
              height: 100%;
              display: grid;
              place-items: center;
              grid-template-columns: repeat(2, 1fr);
            `}
          >
            <div css={YearMonthBox}>
              {yearList.map((item, idx) => (
                <p key={idx} css={YearTextActive(item, year)} onClick={() => handleClickYear(item)}>
                  {item}
                </p>
              ))}
            </div>
            <div css={YearMonthBox}>
              {monthList.map((item, idx) => (
                <p key={idx} css={MonthTextActive(item, month)} onClick={() => handleClickMonth(item - 1)}>
                  {item >= 10 ? `${item}` : `0${item}`}
                </p>
              ))}
            </div>
          </div>
          <div
            css={(theme) => css`
              position: absolute;
              left: 50%;
              background-color: ${theme.color.gray09};
              width: 1px;
              height: 85px;
            `}
          />
        </>
      )}
    </div>
  );
};

const YearMonthBoxWrap = css`
  display: flex;
  align-items: center;
  position: absolute;
  width: 168px;
  height: 110px;
  background-color: white;
  border: 1px solid #f4f4f4;
  border-radius: 32px;
  z-index: 3;
  top: 24px;
  top: 100px;
`;

const YearMonthBox = (theme: Theme) => css`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  ${theme.font.R_BODY_14};
  color: ${theme.color.gray07};

  overflow-y: scroll;
`;

const YearTextActive = (item: number, year: number) => (theme: Theme) =>
  css`
    color: ${item === year ? 'black' : theme.color.gray07};
    cursor: pointer;
  `;

const MonthTextActive = (item: number, month: number) => (theme: Theme) =>
  css`
    color: ${item === month ? 'black' : theme.color.gray07};
    cursor: pointer;
  `;

export default YearMonthList;
