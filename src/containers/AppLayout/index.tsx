import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';

const AppLayout = ({ children, blackBackground }: PropsWithChildren<{ blackBackground: string[] }>) => {
  const router = useRouter();
  const color = blackBackground.includes(router.pathname) ? 'black' : 'white';

  return (
    <div css={CSSWrapper}>
      <div css={CSSAppLayout(color)}>{children}</div>
    </div>
  );
};

const CSSWrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const CSSAppLayout = (color: string) => css`
  @media screen and (min-width: 450px) {
    width: 440px;
  }
  padding: 0 24px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${color};

  display: flex;
  width: 100%;
  height: 100vh;
  box-shadow: rgb(0 0 0 / 16%) 0 0 8px;
  overflow: hidden;
`;

export default AppLayout;
