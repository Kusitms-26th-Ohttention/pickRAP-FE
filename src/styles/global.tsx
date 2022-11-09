import type { Theme } from '@emotion/react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const globalCss = (theme: Theme) => css`
  ${reset}
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Noto Sans KR', 'Apple Color Emoji', sans-serif;
    background: rgb(245, 245, 245);
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

  button {
    background: transparent none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  span,
  label {
    display: inline-block;
  }

  input:focus {
    outline: none;
  }
`;

export const GlobalStyle = () => <Global styles={globalCss} />;
