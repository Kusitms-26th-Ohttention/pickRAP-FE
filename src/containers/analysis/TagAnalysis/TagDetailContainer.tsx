import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import Link from 'next/link';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { useGetTagAnalysisForYearMonth } from '@/application/hooks/api/analysis';
import NoAnalysis from '@/components/analysis/NoAnalysis';
import TotalRatioBar from '@/components/analysis/TotalRatioBar';
import { ActiveButton } from '@/components/common/Button';

ChartJS.register(ArcElement, Tooltip, Legend);

interface TagDetailProps {
  tagYear: number;
  tagMonth: number;
}

const TagDetailContainer = ({ tagYear, tagMonth }: TagDetailProps) => {
  const [clickChart, setClickChart] = useState(false);
  const [clickTag, setClickTag] = useState('');
  const { detailAnalysis } = useGetTagAnalysisForYearMonth(tagYear, tagMonth);
  const hashTags: HashTagAnalysis[] = detailAnalysis.hashtags;

  const chartOption = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (item: any) => {
            return `${item[0].formattedValue}%`;
          },
          label: (item: any) => {
            const countIdx = item.dataIndex;
            return `총 ${item.dataset.dataCount[countIdx]}번`;
          },
        },
        backgroundColor: '#fff',
        caretSize: 0,
        titleColor: '#1F2C37',
        titleFont: { size: 15 },
        bodyColor: '#757575',
        bodyFont: { size: 12 },
        displayColors: false,
        cornerRadius: 15,
        padding: 10,
      },
    },
    layout: {
      padding: 10,
    },
    onClick: (e: any, activeEl: any) => {
      if (activeEl[0] != undefined) {
        const clicked = activeEl[0].element.options;
        // TODO 크기 증가랑 state변환이 한 번 클릭 후 같이 이루어짐. 수정 필요 ..
        // set함수 넣지 않고 차트의 크기만 키울 시엔 바로바로 변환이 잘 되는 것 확인
        {
          clicked.offset < 20
            ? ((clicked.offset += 20), handleClickChartOn(e.chart.data.labels[activeEl[0].index]))
            : ((clicked.offset -= 20), handleClickChartOff());
        }
      }
      if (activeEl[0] === undefined) {
        setClickChart(false);
      }
    },
  };

  const handleClickChartOn = (label: string) => {
    setClickChart(true);
    setClickTag(label);
  };

  const handleClickChartOff = () => {
    setClickChart(false);
  };

  const chartColor = ['#F6D936', '#2A2E34', '#ABA9A6', '#EAE9E4'];
  const dataSetsName: string[] = [];
  const dataSetsRate: number[] = [];
  const dataSetsCount: number[] = [];
  hashTags.forEach(
    (item) => (
      dataSetsName.push(item.hashtag_name), dataSetsRate.push(item.hashtag_rate), dataSetsCount.push(item.hashtag_count)
    ),
  );

  const DefaultTagData = {
    labels: dataSetsName,
    datasets: [
      {
        data: dataSetsRate,
        dataCount: dataSetsCount,
        backgroundColor: chartColor,
        borderColor: chartColor,
        padding: 10,
      },
    ],
  };

  return (
    <>
      {hashTags.length === 0 ? (
        <NoAnalysis />
      ) : (
        <div
          css={css`
            width: 100%;
            height: 100%;
            margin-top: 10px;
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
              margin-top: 30px;
            `}
          >
            <Doughnut data={DefaultTagData} options={chartOption} width="200" height="200" />
            {/* 아래부터 비율 표시 부분 */}
            <TotalRatioBar />
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
          </div>
          {clickChart && (
            <Link href={{ pathname: '/scrap', query: { params: clickTag } }} as={'/scrap'}>
              <ActiveButton
                custom={(theme) => css`
                  margin: 20px 0;
                  border-radius: 33px;
                  color: ${theme.color.gray03};
                  :hover {
                    background-color: ${theme.color.black02};
                    color: white;
                  }
                `}
              >
                콘텐츠 모아보기
              </ActiveButton>
            </Link>
          )}
        </div>
      )}
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
