import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const globalCss = css`
  ${reset};

  @font-face {
    font-family: 'SCoreDream';
    font-weight: 400;
    font-style: normal;
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff2) format('woff2'),
      url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'SCoreDream';
    font-weight: 500;
    font-style: normal;
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff2) format('woff2'),
      url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream5.woff) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'SCoreDream';
    font-weight: 600;
    font-style: normal;
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff2) format('woff2'),
      url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream6.woff) format('woff');
    font-display: swap;
  }
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
