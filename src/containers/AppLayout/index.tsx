import { css } from '@emotion/react';
import type { PropsWithChildren } from 'react';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div css={CSSWrapper}>
      <div css={CSSAppLayout}>{children}</div>
    </div>
  );
};

const CSSWrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const CSSAppLayout = css`
  @media screen and (min-width: 450px) {
    width: 440px;
  }
  padding: 0 24px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  display: flex;
  width: 100%;
  height: 100vh;
  box-shadow: rgb(0 0 0 / 16%) 0 0 8px;
  overflow: hidden;
`;

export default AppLayout;
