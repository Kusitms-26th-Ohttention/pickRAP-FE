import { css } from '@emotion/react';
import { Chart as ChartJS, LinearScale } from 'chart.js';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import { Chart } from 'react-chartjs-2';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';

ChartJS.register(WordCloudController, WordElement, LinearScale);

const MOCK_TEXTS = Array(5)
  .fill(0)
  .map((_, idx) => ({ text_count: idx, text_rate: idx, text_word: `단어_${idx}` }));

interface Props {
  texts: Analysis['texts'];
}

const TextAnalysisContent = ({ texts = MOCK_TEXTS }: Props) => {
  texts.sort((l, r) => r.text_count - l.text_count);
  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={false}>텍스트 분석</SubAnaNavigation>
      <div
        css={(theme) =>
          css`
            ${theme.font.M_POINT_16};
            font-weight: 200;
            padding-block: 12px;
          `
        }
      >
        <div
          css={(theme) => css`
            position: absolute;
            z-index: 0;
            transform: translateY(-50%);
            width: 19px;
            height: 19px;
            border-radius: 50%;
            background: ${theme.color.yellow01};
          `}
        />
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
    </div>
  );
};

export default TextAnalysisContent;
