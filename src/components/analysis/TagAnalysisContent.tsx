import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { useGetAnalysis } from '@/application/hooks/api/analysis';
import { tagDetailState } from '@/application/store/analysis/analysisState';
import TagAnalysisContainer from '@/containers/analysis/TagAnalysis/TagAnalysisContainer';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';
import NoAnalysis from './NoAnalysis';

const TagAnalysisContent = () => {
  const [tagState, setTagState] = useRecoilState(tagDetailState);
  const { allAnalysis } = useGetAnalysis();
  const hashTags = allAnalysis.hashtags;

  const chartOption = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleClickMoreBtn = () => {
    setTagState(!tagState);
  };

  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={true} onClick={handleClickMoreBtn}>
        내 스크랩 분석
      </SubAnaNavigation>
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
          {hashTags.length === 0 ? (
            <NoAnalysis />
          ) : (
            <TagAnalysisContainer hashTags={hashTags} chartOption={chartOption} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TagAnalysisContent;
