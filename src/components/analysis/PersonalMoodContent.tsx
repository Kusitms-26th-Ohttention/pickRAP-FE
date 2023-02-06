import { css } from '@emotion/react';
import Image from 'next/image';

import { useGetAnalysis } from '@/application/hooks/api/analysis';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';

const PersonalMoodContent = () => {
  const { allAnalysis } = useGetAnalysis();

  const moods = allAnalysis.personal_mood_results;

  if (!moods.length)
    return (
      <article>
        <SubAnaNavigation moreState={false}>퍼스널 무드</SubAnaNavigation>
        <div
          css={(theme) => css`
            display: flex;
            padding-block: 50px;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            align-items: center;
            gap: 20px;
            ${theme.font.M_POINT_14};
            color: ${theme.color.gray06};
          `}
        >
          <span
            css={css`
              position: relative;
              transform: translateX(-4px);
              height: 10vh;
              width: 155px;
            `}
          >
            <Image src={'/picture/warn.svg'} layout="fill" objectFit={'contain'} />
          </span>
          <span>데이터가 없습니다</span>
        </div>
      </article>
    );

  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={false}>퍼스널 무드</SubAnaNavigation>
      <div
        css={(theme) =>
          css`
            ${theme.font.M_POINT_16};
            font-weight: 200;
            padding-block: 12px;
            ::before {
              content: '';
              position: absolute;
              z-index: 0;
              transform: translateY(-50%);
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: ${theme.color.yellow01};
            }
          `
        }
      >
        <span
          css={(theme) => css`
            ${theme.font.M_POINT_16};
            color: ${theme.color.gray03};
            z-index: 1;
            position: relative;
            display: flex;
          `}
        >
          &nbsp;
          <b
            css={(theme) => css`
              ${theme.font.B_POINT_18};
              color: ${theme.color.black01};
            `}
          >
            #{moods[0].color_style}
          </b>
          <span>
            &nbsp; 가 가장 <br />
            많은 비율을 차지하고 있어요
          </span>
        </span>
      </div>
    </div>
  );
};

export default PersonalMoodContent;
