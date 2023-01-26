import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

import SelectPeriod from '@/components/analysis/SelectPeriod';
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
        {/* TODO 코드 정리해보기 ..... 어떻게 정리하지 */}
        {period === '연별' ? (
          <div
            css={css`
              display: flex;
              position: relative;
              width: 20%;
              margin: 12px 0 16px 0;
            `}
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
              {tagYear}
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
        ) : period === '월별' ? (
          <div
            css={css`
              display: flex;
              position: relative;
              width: 25%;
              margin: 12px 0 16px 0;
            `}
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
              {tagYear}.{tagMonth}
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
        ) : null}
        <TagDetailContainer />
      </div>
    </>
  );
};
export default TagAnalysisDetail;
