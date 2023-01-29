import { css, CustomStyle } from '@emotion/react';

interface YearMonthListProps {
  custom?: CustomStyle;
  year?: number;
  month?: number;
  period?: string;
}

const YearMonthList = ({ custom, year, month, period }: YearMonthListProps) => {
  return (
    <div css={[YearMonthBoxWrap, custom]}>
      <div css={YearMonthBox}>연 월 선택 박스</div>
    </div>
  );
};

const YearMonthBoxWrap = css`
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

const YearMonthBox = css`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

export default YearMonthList;
