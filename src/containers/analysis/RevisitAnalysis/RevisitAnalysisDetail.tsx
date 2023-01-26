import { css } from '@emotion/react';

import { useGetAnalysis } from '@/application/hooks/api/analysis';

const RevisitAnalysisDetail = () => {
  // 우선 getAnalysis로 예시 만들기
  const { allAnalysis } = useGetAnalysis();
  const hashTags = allAnalysis.hashtags;

  const chartColor = ['#F6D936', '#2A2E34', '#ABA9A6', '#EAE9E4'];
  const dataSetsName: string[] = [];
  const dataSetsRate: number[] = [];
  hashTags.forEach((item) => (dataSetsName.push(item.hashtag_name), dataSetsRate.push(item.hashtag_rate)));

  const DefaultTagData = {
    labels: dataSetsName,
    datasets: [
      {
        data: dataSetsRate,
        backgroundColor: chartColor,
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
    <>
      <div
        css={css`
          height: 100%;
          margin-top: 24px;
        `}
      >
        재방문 콘텐츠 디테일 페이지
      </div>
    </>
  );
};

export default RevisitAnalysisDetail;
