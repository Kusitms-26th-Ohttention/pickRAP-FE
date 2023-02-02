import { css } from '@emotion/react';

const TotalRatioBar = () => {
  return (
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
  );
};

export default TotalRatioBar;
