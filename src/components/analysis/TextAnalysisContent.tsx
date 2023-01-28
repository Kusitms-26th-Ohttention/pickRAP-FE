import { css } from '@emotion/react';
import { Chart as ChartJS, LinearScale } from 'chart.js';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import Image from 'next/image';
import { Chart } from 'react-chartjs-2';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';

ChartJS.register(WordCloudController, WordElement, LinearScale);

interface Props {
  texts: Analysis['texts'];
}

const TextAnalysisContent = ({ texts }: Props) => {
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
              width: 19px;
              height: 19px;
              border-radius: 50%;
              background: ${theme.color.yellow01};
            }
          `
        }
      >
        <span css={{ zIndex: 1, position: 'relative' }}>
          &nbsp;<b css={{ fontWeight: 700 }}>{`'${texts[0].text_word}'`}</b> 를 가장 많이 사용했어요
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
            datasets: [{ data: texts.map((text) => text.text_count * 10) }],
          }}
        />
      </div>
    </article>
  );
};

export default TextAnalysisContent;
