import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ActiveButton } from '@/components/common/Button';

const Home: NextPage = () => {
  const router = useRouter();
  // TODO 세션 인증 시 search 로 리다이렉트
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
          onClick={() => router.push('/auth/signup')}
        >
          새 계정 만들기
        </ActiveButton>
        <ActiveButton
          active
          onClick={() => router.push('/auth/signin')}
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
