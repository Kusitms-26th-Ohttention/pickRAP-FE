import { css } from '@emotion/react';

import TagAnalysisContainer from '@/containers/analysis/TagAnalysis/TagAnalysisContainer';

import SubAnaNavigation from './\bAnaNavigation/SubAnaNavigation';
import { useGetAnalysis } from '@/application/hooks/api/analysis';

const TagAnalysisContent = () => {
  // TODO 더보기 클릭 시 변경되는 화면 스타일링
  const { allAnalysis } = useGetAnalysis();
  const hashTags = allAnalysis.hashtags;

  const chartOption = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={true}>내 스크랩 분석</SubAnaNavigation>
      <div
        css={css`
          height: 342px;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 12px 0 32px;
          `}
        >
          <TagAnalysisContainer hashTags={hashTags} chartOption={chartOption} />
        </div>
      </div>
    </div>
  );
};

export default TagAnalysisContent;
