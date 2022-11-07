import { css } from '@emotion/react';
import type { NextPage } from 'next';

import { KakaoButton, NaverButton } from '@/components/auth/OAuthButton';
import { ButtonBase } from '@/components/common/Button';

const SignUp: NextPage = () => {
  return (
    <>
      <img src="/logo/black_pickrap.svg" alt="Logo" width={128} />
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
              border-color: ${theme.color.black01};
              background: ${theme.color.black01};
              color: ${theme.color.white01};
              box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
              padding: 14px 0;
            `
          }
        >
          로그인
        </ButtonBase>
        <KakaoButton />
        <NaverButton />
      </div>
    </>
  );
};

export default SignUp;
