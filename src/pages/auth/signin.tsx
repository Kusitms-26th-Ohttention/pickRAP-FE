import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { useInput } from '@/application/hooks/useInput';
import { AuthForm } from '@/components/auth/LoginForm';
import { KakaoButton, NaverButton } from '@/components/auth/OAuthButton';

const SignIn: NextPage = () => {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();

  const handleSubmit = () => {
    // TODO Login /auth/login
    // error 발생 시 AuthFormErrorMessage 출력
  };
  return (
    <>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;
        `}
      >
        <div
          css={css`
            height: 146px;
          `}
        />
        <Image src={'/logo/black_pickrap.svg'} width={164} height={39} />
        <AuthForm onSubmit={handleSubmit}>
          <AuthForm.Input name={'email'} placeholder={'아이디 또는 이메일'} value={email} handleChange={handleEmail} />
          <AuthForm.Input
            name={'password'}
            placeholder={'암호'}
            type={'password'}
            value={password}
            handleChange={handlePassword}
          />
          <AuthForm.Submit type={'submit'}>로그인</AuthForm.Submit>
        </AuthForm>
        <p
          css={(theme: Theme) =>
            css`
              margin-top: 16px;
              ${theme.font.R_BODY_10} color: ${theme.color.gray07};
              text-align: center;
            `
          }
        >
          자동 로그인 체크박스
        </p>
        <div
          css={css`
            bottom: 126px;
            position: absolute;
            width: 100%;
          `}
        >
          <KakaoButton />
          <div
            css={css`
              height: 12px;
            `}
          />
          <NaverButton />
        </div>
      </div>
    </>
  );
};

export default SignIn;
