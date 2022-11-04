import { css } from '@emotion/react';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return <div css={CSSHome}></div>;
};

const CSSHome = css`
  height: 100%;
  width: 100%;
  background: black;
`;

export default Home;
