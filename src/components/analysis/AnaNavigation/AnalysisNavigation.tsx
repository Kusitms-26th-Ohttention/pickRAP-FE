import { css } from '@emotion/react';

const AnalysisNavigation = () => {
  return (
    <>
      <nav
        css={(theme) => css`
          width: 100%;
          height: 64px;
          ${theme.font.M_POINT_16};
          color: ${theme.color.black02};
        `}
      >
        <p
          css={css`
            display: flex;
            justify-content: center;
            margin: 28px 0 18px 0;
          `}
        >
          분석
        </p>
      </nav>
      <div
        css={(theme) =>
          css`
            border: 1px solid ${theme.color.gray09};
          `
        }
      />
    </>
  );
};

export default AnalysisNavigation;
