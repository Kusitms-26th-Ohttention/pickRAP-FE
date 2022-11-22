import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';

const AppLayout = ({ children, blackBackground }: PropsWithChildren<{ blackBackground: string[] }>) => {
  const router = useRouter();
  const isBlack = blackBackground && blackBackground.includes(router.pathname);

  return (
    <div css={CSSWrapper}>
      <div css={CSSAppLayout(isBlack)}>
        <div
          css={css`
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const CSSWrapper = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const CSSAppLayout = (isBlack: boolean) => (theme: Theme) =>
  css`
    @media screen and (min-width: 450px) {
      width: 440px;
    }
    padding: 24px 16px 60px 16px;

    flex-direction: column;
    align-items: center;
    background: ${isBlack ? theme.color.black02 : theme.color.white01};

    display: flex;
    width: 100%;
    box-shadow: rgb(0 0 0 / 16%) 0 0 8px;
    overflow: hidden;
    position: relative;
  `;

export default AppLayout;
