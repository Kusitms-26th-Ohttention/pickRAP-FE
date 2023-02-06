import { css } from '@emotion/react';
import { Chart as ChartJS, LinearScale } from 'chart.js';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import Image from 'next/image';
import { Chart } from 'react-chartjs-2';

import { useGetAnalysis } from '@/application/hooks/api/analysis';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';

ChartJS.register(WordCloudController, WordElement, LinearScale);

const TextAnalysisContent = () => {
  const { allAnalysis } = useGetAnalysis();
  const texts = allAnalysis.texts;

  if (!texts.length)
    return (
      <article>
        <SubAnaNavigation moreState={false}>텍스트 분석</SubAnaNavigation>
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
    <article>
      <SubAnaNavigation moreState={false}>텍스트 분석</SubAnaNavigation>
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
            #{texts[0].text_word}
          </b>
          <span> &nbsp; 를 가장 많이 사용했어요</span>
        </span>
      </div>
      <div
        css={css`
          height: 257px;
        `}
      >
        <Chart
          type={'wordCloud'}
          options={{
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            elements: { word: { minRotation: 0, maxRotation: 0 } },
          }}
          data={{
            labels: texts.map((text) => text.text_word),
            datasets: [{ data: texts.map((text) => (Math.floor(text.text_rate / 10) + 1) * 10) }],
          }}
        />
      </div>
    </article>
  );
};

export default TextAnalysisContent;
