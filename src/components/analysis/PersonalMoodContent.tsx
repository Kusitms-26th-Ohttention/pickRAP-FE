import { css } from '@emotion/react';
import { Chart as ChartJS, LinearScale, PointElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Image from 'next/image';
import { Bubble } from 'react-chartjs-2';

import { useGetAnalysis } from '@/application/hooks/api/analysis';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';

ChartJS.register(LinearScale, PointElement, ChartDataLabels);

const PersonalMoodContent = () => {
  const { allAnalysis } = useGetAnalysis();

  // const moods = MOCK.slice(0, 4).sort((a, b) => b.rate - a.rate);
  const moods = allAnalysis.personal_mood_results.slice(0, 4);

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

  const datasets = moods.map((mood, idx) => ({ ...BUBBLE_META[idx], label: mood.rate.toString() }));

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
            flex-wrap: wrap;
          `}
        >
          &nbsp;
          <b
            css={(theme) => css`
              ${theme.font.B_POINT_18};
              color: ${theme.color.black01};
            `}
          >
            {moods[0].color_style}
          </b>
          <span>&nbsp; 가 가장</span>
          <span
            css={css`
              width: 100%;
              padding-top: 6px;
            `}
          >
            &nbsp;많은 비율을 차지하고 있어요
          </span>
        </span>
      </div>
      <div
        css={css`
          width: fit-content;
          height: 180px;
          margin-inline: auto;
          margin-top: 10px;
          canvas {
            width: 100%;
            height: 100%;
          }
        `}
      >
        <Bubble
          options={{
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
              datalabels: {
                color: 'white',
                formatter: function (value, context) {
                  return context.dataset.label + '%';
                },
              },
            },
            scales: {
              y: {
                max: 12,
                display: false,
                grid: {
                  display: false,
                },
                beginAtZero: true,
              },
              x: {
                display: false,
                max: 12,
                grid: {
                  display: false,
                },
                beginAtZero: true,
              },
            },
            layout: {
              autoPadding: false,
              padding: 0,
            },
          }}
          data={{ datasets }}
        />
      </div>
      {moods.map((mood, idx) => (
        <div
          key={idx}
          css={css`
            padding-inline: 6px;
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
            {mood.color_style}
          </p>
          <p
            css={(theme) => css`
              ${theme.font.M_POINT_14};
              color: ${theme.color.black02};
            `}
          >
            {mood.rate}%
          </p>
        </div>
      ))}
    </div>
  );
};

// const MOCK = [
//   { color_style: 'a', rate: 1 },
//   { color_style: 'b', rate: 2 },
//   { color_style: 'c', rate: 4 },
//   { color_style: 'd', rate: 6 },
//   { color_style: 'e', rate: 1 },
// ];

const BUBBLE_META = [
  {
    backgroundColor: '#AEBEF7',
    data: [{ x: 6.8, y: 8.8, r: 40 }],
    datalabels: { font: { size: 20, weight: 'bold' as const } },
  },
  {
    backgroundColor: '#C9BCF0',
    data: [{ x: 7, y: 3.2, r: 35 }],
    datalabels: { font: { size: 16 } },
  },
  {
    backgroundColor: '#3ECEEE',
    data: [{ x: 4.5, y: 3.3, r: 30 }],
    datalabels: { font: { size: 16 } },
  },
  {
    backgroundColor: '#4AD79C',
    data: [{ x: 4.7, y: 7, r: 20 }],
    datalabels: { font: { size: 12 } },
  },
];

const CSSChartball = (idx: number) =>
  css`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${idx === 0
      ? '#AEBEF7'
      : idx === 1
      ? '#C9BCF0'
      : idx === 2
      ? '#3ECEEE'
      : idx === 3
      ? '#4AD79C'
      : ''};
  `;
export default PersonalMoodContent;
