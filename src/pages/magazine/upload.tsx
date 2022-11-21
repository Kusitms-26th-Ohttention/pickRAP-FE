import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { ActiveButton } from '@/components/common/Button';
import MagazineCreateContainer from '@/containers/magazine/MagazineCreateContainer';

const UploadMagazine: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          width: 100%;
          gap: 10px;
          margin-bottom: 4px;
          align-items: center;
        `}
      >
        <span
          onClick={() => router.back()}
          css={css`
            width: 10px;
            height: 17px;
            position: absolute;
            z-index: 1;
            left: 0;
          `}
        >
          <Image src={'/icon/backArrow.svg'} layout={'fill'} objectFit={'cover'} />
        </span>
        <span
          css={(theme) =>
            css`
              ${theme.font.R_BODY_15};
              min-width: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            `
          }
        >
          <Image src={'/icon/multiSelect.svg'} width={18} height={18} />
        </span>
      </div>
      <MagazineCreateContainer />
      <ActiveButton
        active
        custom={css`
          margin-top: auto;
        `}
      >
        완료
      </ActiveButton>
    </>
  );
};

export default UploadMagazine;
