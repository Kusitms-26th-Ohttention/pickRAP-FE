import { css } from '@emotion/react';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';

const PersonalMoodContent = () => {
  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={false}>퍼스널 무드</SubAnaNavigation>
      <div
        css={css`
          height: 510px;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 12px 0 32px;
          `}
        >
          퍼스널 무드
        </div>
      </div>
    </div>
  );
};

export default PersonalMoodContent;
