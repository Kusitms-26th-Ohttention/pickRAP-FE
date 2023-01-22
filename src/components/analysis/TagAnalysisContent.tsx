import { css } from '@emotion/react';

import SubAnaNavigation from './\bAnaNavigation/SubAnaNavigation';

const TagAnalysisContent = () => {
  return (
    <div
      css={(theme) => css`
        background-color: ${theme.color.white01};
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={true}>내 스크랩 분석</SubAnaNavigation>
      <div
        css={css`
          height: 322px;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 12px 0 32px;
          `}
        >
          해시태그 도넛차트
        </div>
      </div>
    </div>
  );
};

export default TagAnalysisContent;
