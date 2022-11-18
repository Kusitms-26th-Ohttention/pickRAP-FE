import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import useSignUp from '@/application/hooks/api/auth/useSignUp';
import { useInput } from '@/application/hooks/useInput';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@/application/utils/constant';
import errorHandler from '@/application/utils/errorHandler';
import { AuthForm } from '@/components/auth/LoginForm';
import { KakaoButton, NaverButton } from '@/components/auth/OAuthButton';
import withNavigation from '@/containers/HOC/withNavigation';

const SignUp: NextPage = () => {
  const router = useRouter();
  const [name, handleName, isValidName] = useInput({ validator: (s) => s.length > 0 });

  const [email, handleEmail, isValidEmail] = useInput({
    validator: (s) => EMAIL_REGEXP.test(s),
  });
  const [password, handlePassword, isValidPass] = useInput({
    validator: (s) => {
      if (s.length <= 7) return false;
      return PASSWORD_REGEXP.test(s);
    },
  });
  const [errInput, setErrInput] = useState('');
  const [errForm, setErrForm] = useState('');
  const { mutate: signUpMutate } = useSignUp();

  const handleSubmit = () => {
    setErrForm('');
    if (!isValidName) setErrInput('nickname');
    else if (!isValidEmail) setErrInput('email');
    else if (!isValidPass) setErrInput('password');
    else {
      setErrInput('');
      signUpMutate(
        { email, password, name },
        {
          onError: errorHandler(setErrForm),
          onSuccess: () => router.push('/auth/complete'),
        },
      );
    }
  };
  return (
    <>
      <div
        css={css`
          height: 55%;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        `}
      >
        <div
          css={css`
            margin-top: 63px;
          `}
        ></div>
        <div>
          <AuthForm errInput={errInput} onSubmit={handleSubmit} errFormMsg={errForm}>
            <AuthForm.Input
              name={'nickname'}
              errMsg={'프로필 이름을 입력해주세요'}
              placeholder={'프로필 이름'}
              value={name}
              handleChange={handleName}
            />
            <AuthForm.Input
              name={'email'}
              placeholder={'이메일'}
              errMsg={'올바르지 않은 이메일 형식입니다'}
              value={email}
              handleChange={handleEmail}
            />
            <AuthForm.Input
              name={'password'}
              placeholder={'암호'}
              type={'password'}
              errMsg={'영문/특수문자 포함 최소 8글자 이상 입력해주세요'}
              value={password}
              handleChange={handlePassword}
            />
            <div
              css={css`
                margin-top: 19px;
              `}
            ></div>
            <AuthForm.Submit type={'submit'}>계정 생성하기</AuthForm.Submit>
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
            가입하면 피크랩의 이용약관 & 개인 정보 보호 정책에 동의하시게 됩니다.
          </p>
        </div>
      </div>
      <div
        css={css`
          width: 100%;
          height: 30%;
          display: flex;
          flex-direction: column-reverse;
          position: relative;
          gap: 12px;
        `}
      >
        <NaverButton />
        <KakaoButton />
      </div>
    </>
  );
};

export default withNavigation(SignUp, { TopNav: { title: '회원가입', backUrl: '/' }, noBottom: true });
