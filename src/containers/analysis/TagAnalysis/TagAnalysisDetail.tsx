import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  useGetCurrentMonth,
  useGetCurrentYear,
  useResetCurrentMonth,
  useResetCurrentYear,
} from '@/application/store/analysis/analysisHook';
import { yearMonthBoxState } from '@/application/store/analysis/analysisState';
import SelectPeriod from '@/components/analysis/SelectPeriod';
import YearMonthSelector from '@/components/analysis/SelectPeriod/YearMonthSelector';
import TagDetailContainer from '@/containers/analysis/TagAnalysis/TagDetailContainer';

const initSelectedContext = { yearSelect: false, monthSelect: false };
type SelectContextKey = keyof typeof initSelectedContext;

const TagAnalysisDetail = () => {
  const [selected, setSelected] = useRecoilState(yearMonthBoxState);
  const [period, setPeriod] = useState('전체');
  const tagYear = useGetCurrentYear();
  const tagMonth = useGetCurrentMonth();
  const resetYear = useResetCurrentYear();
  const resetMonth = useResetCurrentMonth();

  const ref = useRef<SelectContextKey>('yearSelect');

  const handleTabClick = (key: SelectContextKey) => {
    ref.current = key;
  };

  const handleClickYearMonth = () => {
    setSelected((prev) => {
      const ret = { ...prev };
      ret[ref.current] = !ret[ref.current];
      return ret;
    });
  };

  const handleClickResetEntire = () => {
    resetYear();
    resetMonth();
  };

  return (
    <div
      css={css`
        height: 100%;
        overflow: hidden;
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          overflow: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
      >
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
              <div onClick={handleClickResetEntire}>
                <SelectPeriod.Option value={'전체'} />
              </div>
              <SelectPeriod.Option value={'3개월'} />
              <div onClick={() => handleTabClick('yearSelect')}>
                <SelectPeriod.Option value={'월별'} />
              </div>
              <div onClick={() => handleTabClick('monthSelect')}>
                <SelectPeriod.Option value={'연별'} />
              </div>
            </SelectPeriod.OptionList>
          </SelectPeriod>
          {period === '연별' ? (
            <YearMonthSelector
              onClick={handleClickYearMonth}
              selectItem={selected[ref.current]}
              period={period}
              tagYear={tagYear}
              tagMonth={tagMonth}
              custom={css`
                width: 30%;
              `}
            >
              {tagYear}
            </YearMonthSelector>
          ) : period === '월별' ? (
            <YearMonthSelector
              onClick={handleClickYearMonth}
              selectItem={selected[ref.current]}
              period={period}
              tagYear={tagYear}
              tagMonth={tagMonth}
              custom={css`
                width: 35%;
              `}
            >
              {tagMonth > 0 && tagMonth < 10 ? `${tagYear}.0${tagMonth}` : `${tagYear}.${tagMonth}`}
            </YearMonthSelector>
          ) : null}
          <TagDetailContainer tagYear={tagYear} tagMonth={tagMonth} />
        </div>
      </div>
    </div>
  );
};
export default TagAnalysisDetail;
