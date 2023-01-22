import { css } from '@emotion/react';

import SubAnaNavigation from './\bAnaNavigation/SubAnaNavigation';

const RevisitContent = () => {
  return (
    <div
      css={(theme) => css`
        background-color: ${theme.color.white01};
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={true}>재방문 콘텐츠</SubAnaNavigation>
      <div
        css={css`
          height: 315px;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 12px 0 32px;
          `}
        >
          재방문 콘텐츠
        </div>
      </div>
    </div>
  );
};

export default RevisitContent;
