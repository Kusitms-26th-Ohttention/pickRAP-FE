import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { NextPage } from 'next';
import React, { useState } from 'react';

import { useInput } from '@/application/hooks/useInput';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@/application/utils/constant';
import { AuthForm } from '@/components/auth/LoginForm';
import { KakaoButton, NaverButton } from '@/components/auth/OAuthButton';

const SignUp: NextPage = () => {
  const [nickname, handleNickname, isValidName] = useInput({ validator: (s) => s.length > 0 });

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

  const handleSubmit = () => {
    if (!isValidName) setErrInput('nickname');
    else if (!isValidEmail) setErrInput('email');
    else if (!isValidPass) setErrInput('password');
    else {
      // TODO useMutation /auth/sign-up
      setErrInput('');
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
        <AuthForm errInput={errInput} onSubmit={handleSubmit}>
          <AuthForm.Input
            name={'nickname'}
            errMsg={'프로필 이름을 입력해주세요'}
            placeholder={'프로필 이름'}
            value={nickname}
            handleChange={handleNickname}
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

export default SignUp;
