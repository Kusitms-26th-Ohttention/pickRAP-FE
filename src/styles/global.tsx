import type { Theme } from '@emotion/react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const globalCss = (theme: Theme) => css`
  ${reset}

  html,
  body {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
    word-break: keep-all;
    word-wrap: break-word;
    ::-webkit-scrollbar {
      display: none !important;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const GlobalStyle = () => <Global styles={globalCss} />;
