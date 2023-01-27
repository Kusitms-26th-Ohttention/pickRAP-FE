import { css } from '@emotion/react';
import { useState } from 'react';

import SelectPeriod from '@/components/analysis/SelectPeriod';
import YearMonthSelector from '@/components/analysis/SelectPeriod/YearMonthSelector';
import TagDetailContainer from '@/containers/analysis/TagAnalysis/TagDetailContainer';

const TagAnalysisDetail = () => {
  const [period, setPeriod] = useState('전체');

  // TODO atom으로 관리?
  const date = new Date();
  const tagYear = date.getFullYear();
  const tagMonth = '0' + String(date.getMonth() + 1).slice(-2);

  return (
    <>
      <div
        css={css`
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 35px;
        `}
      >
        <SelectPeriod value={'전체'} onChange={setPeriod}>
          <SelectPeriod.Trigger />
          <SelectPeriod.OptionList>
            <SelectPeriod.Option value={'전체'} />
            <SelectPeriod.Option value={'3개월'} />
            <SelectPeriod.Option value={'월별'} />
            <SelectPeriod.Option value={'연별'} />
          </SelectPeriod.OptionList>
        </SelectPeriod>
        {period === '연별' ? (
          <YearMonthSelector
            custom={css`
              width: 20%;
            `}
          >
            {tagYear}
          </YearMonthSelector>
        ) : period === '월별' ? (
          <YearMonthSelector
            custom={css`
              width: 25%;
            `}
          >
            {tagYear}.{tagMonth}
          </YearMonthSelector>
        ) : null}
        <TagDetailContainer />
      </div>
    </>
  );
};
export default TagAnalysisDetail;
