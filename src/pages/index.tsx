import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ButtonBase } from '@/components/common/Button';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div css={CSSHome}>
      <Image src="/logo/white_pickrap.svg" alt="Logo" width={128} height={45} />
      <div
        css={css`
          width: calc(100% - 48px);
          display: flex;
          flex-direction: column;
          gap: 12px;
        `}
      >
        <ButtonBase
          custom={(theme) =>
            css`
              border-color: ${theme.color.white01};
              background: ${theme.color.white01};
              color: ${theme.color.black01};
            `
          }
          onClick={() => router.push('/auth/signup')}
        >
          새 계정 만들기
        </ButtonBase>
        <ButtonBase
          custom={(theme) =>
            css`
              border-color: ${theme.color.white01};
              background: ${theme.color.black01};
              color: ${theme.color.white01};
            `
          }
          onClick={() => router.push('/auth/signin')}
        >
          로그인
        </ButtonBase>
      </div>
    </div>
  );
};

const CSSHome = css`
  height: 100%;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default Home;
