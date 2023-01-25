import { css } from '@emotion/react';

import SubAnaNavigation from './\bAnaNavigation/SubAnaNavigation';

const TextAnalysisContent = () => {
  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={false}>텍스트 분석</SubAnaNavigation>
      <div
        css={css`
          height: 257px;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 12px 0 32px;
          `}
        >
          텍스트 분석
        </div>
      </div>
    </div>
  );
};

export default TextAnalysisContent;
