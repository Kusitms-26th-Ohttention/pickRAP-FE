import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FormEventHandler } from 'react';
import React, { useState } from 'react';

import { AuthForm } from '@/components/auth/LoginForm';
import InputBase from '@/components/common/Input/InputBase';

export default {
  title: 'Components/Login',
  component: InputBase,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputBase>;

/**
 * param: name, validator
 * return: error 여부, value, handleChange
 */

const Template: ComponentStory<typeof InputBase> = (args) => {
  const [nickname, setNickname] = useState('');
  const handleNickname = (t: string) => setNickname(t);
  const [email, setEmail] = useState('');
  const handleEmail = (t: string) => setEmail(t);
  const [password, setPassword] = useState('');
  const handlePassword = (t: string) => setPassword(t);

  const [errInput, setErrInput] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (password !== 'elbi') setErrInput('password');
    else setErrInput('');
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 30%;
      `}
    >
      <AuthForm errInput={errInput} onSubmit={handleSubmit}>
        <AuthForm.Input
          name={'nickname'}
          placeholder={'프로필 이름'}
          errMsg={'err1'}
          value={nickname}
          handleChange={handleNickname}
        />
        <AuthForm.Input
          name={'email'}
          placeholder={'이메일'}
          errMsg={'err2'}
          value={email}
          handleChange={handleEmail}
        />
        <AuthForm.Input
          name={'password'}
          placeholder={'암호'}
          type={'password'}
          errMsg={'err3'}
          value={password}
          handleChange={handlePassword}
        />
        <AuthForm.Submit type={'submit'}>계정 생성하기</AuthForm.Submit>
      </AuthForm>
    </div>
  );
};

export const Form = Template.bind({});
