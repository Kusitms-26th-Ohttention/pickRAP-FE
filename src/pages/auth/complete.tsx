import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ActiveButton } from '@/components/common/Button';

const Complete: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div
        css={css`
          height: 70%;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        `}>
        <div css={css`margin-top: 220px;`} />
        <Image src={'/picture/signup.svg'} width={237} height={199} />
      </div>
      <div css={css`
        height: 30%;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        position: relative;
        margin-bottom: 112px;
        gap: 10px;
      `}>
        <ActiveButton active onClick={() => router.push('/auth/profile')}>
          프로필 설정하기
        </ActiveButton>
        <ActiveButton onClick={() => router.push('/scrap')}>건너뛰기</ActiveButton>
      </div>
    </>
  );
};

export default Complete;
