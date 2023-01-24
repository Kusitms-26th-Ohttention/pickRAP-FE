import { css, Theme } from '@emotion/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// TODO 타입 지정 위치 변경
interface AnalysisDataProps {
  hashTags: HashTagAnalysis[];
  chartOption: {
    plugins: {
      legend: {
        display: boolean;
      };
    };
  };
}

const TagAnalysisContainer = ({ hashTags, chartOption }: AnalysisDataProps) => {
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

  return (
    <>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 100%;
            background-color: #f6d936;
            z-index: 0;
            top: 48px;
          `}
        />
        <p
          css={(theme) => css`
            position: relative;
            ${theme.font.B_POINT_18};
            color: ${theme.color.black01};
            margin: 0 10px 0 5px;
          `}
        >
          {hashTags[0].hashtag_name}
        </p>
        <p
          css={(theme) => css`
            ${theme.font.M_POINT_16};
            color: ${theme.color.gray03};
          `}
        >
          를 가장 많이 태그했어요.
        </p>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        `}
      >
        <div
          css={css`
            width: 182px;
            height: 182px;
          `}
        >
          <Doughnut data={DefaultTagData} options={chartOption} />
        </div>
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            margin-top: 25px;
          `}
        >
          {hashTags.map((tag, idx) => (
            <div
              key={tag.hashtag_name}
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <div css={CSSChartball(idx)} />
              <p
                css={(theme) => css`
                  ${theme.font.R_BODY_12};
                  color: ${theme.color.gray04};
                  margin-top: 10px;
                `}
              >
                {tag.hashtag_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const CSSChartball = (idx: number) => (theme: Theme) =>
  css`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${idx === 0
      ? theme.color.chartYellow
      : idx === 1
      ? theme.color.chartBlack
      : idx === 2
      ? theme.color.chartGray
      : idx === 3
      ? theme.color.chartWhite
      : ''};
  `;

export default TagAnalysisContainer;
