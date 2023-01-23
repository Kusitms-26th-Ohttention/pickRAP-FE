import { css } from '@emotion/react';

import TagAnalysisContainer from '@/containers/analysis/TagAnalysis/TagAnalysisContainer';

import SubAnaNavigation from './\bAnaNavigation/SubAnaNavigation';

const TagAnalysisContent = () => {
  // TODO 해당 컴포넌트에서 도넛차트와 전체비율을 표시할 데이터 불러와 전달
  // TODO 더보기 클릭 시 변경되는 화면 스타일링

  // 더미데이터 도넛차트용
  const testData = {
    labels: ['IT', 'MOVIE', '패션', '진로'],
    datasets: [
      {
        data: [56, 27, 10, 7],
        backgroundColor: ['#F6D936', '#2A2E34', '#ABA9A6', '#EAE9E4'],
        borderWidth: 0,
      },
    ],
  };

  const chartOption = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      css={(theme) => css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={true}>내 스크랩 분석</SubAnaNavigation>
      <div
        css={css`
          height: 362px;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 12px 0 32px;
          `}
        >
          <TagAnalysisContainer testData={testData} chartOption={chartOption} />
        </div>
      </div>
    </div>
  );
};

export default TagAnalysisContent;
