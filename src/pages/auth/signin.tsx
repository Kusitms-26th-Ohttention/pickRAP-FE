import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import useSignIn from '@/application/hooks/api/auth/useSignIn';
import { useInput } from '@/application/hooks/useInput';
import errorHandler from '@/application/utils/errorHandler';
import { AuthForm } from '@/components/auth/LoginForm';
import { KakaoButton, NaverButton } from '@/components/auth/OAuthButton';
import CheckBox from '@/components/common/CheckBox';

const SignIn: NextPage = () => {
  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();
  const [errMsg, setErrMsg] = useState('');
  const { mutate: loginMutate } = useSignIn();
  const router = useRouter();

  const handleSubmit = () => {
    if (!email) setErrMsg('이메일을 입력해 주세요');
    else if (!password) setErrMsg('비밀번호를 입력해 주세요');
    else if (email && password) {
      loginMutate(
        { email, password },
        {
          onSuccess: () => {
            router.push('/scrap');
          },
          onError: errorHandler(setErrMsg),
        },
      );
    }
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
        <Image src={'/logo/black_pickrap.svg'} width={164} height={39} priority />
        <AuthForm onSubmit={handleSubmit} errFormMsg={errMsg}>
          <AuthForm.Input name={'email'} placeholder={'아이디 또는 이메일'} value={email} handleChange={handleEmail} />
          <AuthForm.Input
            name={'password'}
            placeholder={'암호'}
            type={'password'}
            value={password}
            handleChange={handlePassword}
          />
          <CheckBox checked>자동 로그인</CheckBox>
          <AuthForm.Submit type={'submit'}>로그인</AuthForm.Submit>
        </AuthForm>
        <div
          css={(theme) =>
            css`
              ${theme.font.R_BODY_12};
              margin-top: 20px;
              width: 100%;
              display: flex;
              color: ${theme.color.gray07};
              > a:visited {
                color: ${theme.color.gray07};
              }
              > a {
                flex: 1 1 auto;
                position: relative;
                text-align: center;
                border-left: solid 1px ${theme.color.gray07};
              }
              > a:first-of-type {
                border-left: none;
              }
            `
          }
        >
          <Link href={'/auth/signup'}>회원 가입</Link>
          <a>아이디 찾기</a>
          <a>비밀번호 찾기</a>
        </div>
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
