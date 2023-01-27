import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { ArcElement, Chart as ChartJS, Legend, scales, Tooltip } from 'chart.js';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { useGetAnalysis } from '@/application/hooks/api/analysis';
import { ActiveButton } from '@/components/common/Button';

ChartJS.register(ArcElement, Tooltip, Legend);

const TagDetailContainer = () => {
  // getAnalysis로 예시 UI
  // filter year month 쿼리문으로 변경해야함
  const [clickChart, setClickChart] = useState(false);
  console.log(clickChart);
  const { allAnalysis } = useGetAnalysis();
  const hashTags: HashTagAnalysis[] = allAnalysis.hashtags;

  const handleClickChart = () => {
    setClickChart(!clickChart);
  };

  const chartOption = {
    plugins: {
      legend: {
        display: false,
      },
    },
    onClick: ({ chart }: any) => {
      handleClickChart;
    },
  };

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
          width: 100%;
          height: 100%;
          margin-top: 20px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: flex-end;
            margin-bottom: 13px;
          `}
        >
          <p
            css={(theme) => css`
              position: relative;
              ${theme.font.B_POINT_28};
              color: ${theme.color.black01};
              margin: 0 8px 0 5px;
              top: 3px;
              z-index: 1;
            `}
          >
            <div
              css={css`
                position: absolute;
                width: 18px;
                height: 18px;
                border-radius: 100%;
                background-color: #f6d936;
                z-index: -1;
                top: -6px;
                left: -3px;
              `}
            />
            {hashTags[0].hashtag_name}
          </p>
          <p
            css={(theme) => css`
              ${theme.font.M_POINT_18};
              color: ${theme.color.gray03};
            `}
          >
            를
          </p>
        </div>
        <p
          css={(theme) => css`
            ${theme.font.M_POINT_18};
            color: ${theme.color.gray03};
            margin-left: 5px;
          `}
        >
          가장 많이 태그했어요
        </p>
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
          {/* 아래부터 비율 표시 부분 */}
          <div
            css={(theme) => css`
              width: 100%;
              display: flex;
              justify-content: space-between;
              color: ${theme.color.gray08};
              ${theme.font.R_BODY_13};
              margin-top: 35px;
            `}
          >
            <p>전체</p>
            <p>100%</p>
          </div>
          <span
            css={(theme) => css`
              background-color: ${theme.color.gray10};
              width: 100%;
              height: 2px;
              margin: 8px 0 16px 0;
            `}
          />
          {hashTags.map((tag, idx) => (
            <div
              key={idx}
              css={css`
                display: grid;
                grid-template-columns: 1fr 12fr 1fr;
                align-items: center;
                width: 100%;
                height: 38px;
              `}
            >
              <div css={CSSChartball(idx)} />
              <p
                css={(theme) => css`
                  ${theme.font.R_BODY_14};
                  color: ${theme.color.gray04};
                `}
              >
                {tag.hashtag_name}
              </p>
              <p
                css={(theme) => css`
                  ${theme.font.M_POINT_14};
                  color: ${theme.color.black02};
                `}
              >
                {tag.hashtag_rate}%
              </p>
            </div>
          ))}
          {/* <ActiveButton
            custom={(theme) => css`
              margin-top: 20px;
              border-radius: 33px;
              color: ${theme.color.gray03};
            `}
          >
            콘텐츠 모아보기
          </ActiveButton> */}
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

export default TagDetailContainer;
