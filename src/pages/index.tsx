import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ActiveButton } from '@/components/common/Button';
import { getAccessToken } from '@/infra/api';

const Home: NextPage = () => {
  const router = useRouter();

  // NOTE: 토큰 존재 유무만 체크
  const handleSignup = () => {
    if (getAccessToken()) router.push('/scrap');
    else router.push('/auth/signup');
  };
  const handleSignin = () => {
    if (getAccessToken()) router.push('/scrap');
    else router.push('/auth/signin');
  };

  return (
    <>
      <div css={CSSHome}>
        <div
          css={css`
            margin-top: 256px;
          `}
        />
        <Image src="/logo/white_pickrap.svg" alt="Logo" width={177} height={90} />
      </div>
      <div
        css={css`
          width: 100%;
          height: max-content;
          margin-top: 70px;
          display: flex;
          flex-direction: column;
          position: relative;
          gap: 12px;
        `}
      >
        <ActiveButton
          custom={(theme) =>
            css`
              color: ${theme.color.black02};
              border-color: ${theme.color.white01};
              height: 52px;
            `
          }
          onClick={handleSignup}
        >
          새 계정 만들기
        </ActiveButton>
        <ActiveButton
          active
          onClick={handleSignin}
          custom={(theme) =>
            css`
              border-color: ${theme.color.white01};
              height: 52px;
            `
          }
        >
          로그인
        </ActiveButton>
      </div>
    </>
  );
};

const CSSHome = css`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
