import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { ActiveButton } from '@/components/common/Button';
import MagazineCreateContainer from '@/containers/magazine/MagazineCreateContainer';

/**
 * @todo
 * 토스트에 대한 고찰..
 * 간단한 메세지(성공, 오류, 경고)는 hook 함수로 호출하는 것이 좋지만
 * 복잡한 UI 띄우는 작업은 일반적인 리액트 컴포넌트로 표현해야 할 듯 보임
 *
 * 문제점 1. 토스트 내용 컴포넌트 간의 강한 결합
 * 문제점 2. 복잡한 함수 호출 구조
 *
 * 리팩토링 필요
 */
const UploadMagazine: NextPage = () => {
  const router = useRouter();
  // TODO upload magazine context recoil
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          width: 100%;
          gap: 10px;
          height: 28px;
          margin-bottom: 4px;
          align-items: center;
        `}
      >
        <span
          onClick={() => router.push('/magazine')}
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