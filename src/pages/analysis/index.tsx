import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import withNavigation from '@/containers/HOC/withNavigation';

const analysis: NextPage = () => {
  return (
    <div
      css={(theme) => css`
        display: flex;
        margin: auto;
        flex-direction: column;
        ${theme.font.M_POINT_14};
        color: ${theme.color.gray06};
        text-align: center;
        gap: 24px;
      `}
    >
      <Image src={'/picture/warn.svg'} width={73} height={99} />
      <p>서비스 준비중 입니다</p>
    </div>
  );
};

export default withNavigation(analysis);
