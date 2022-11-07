import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from 'next/image';
import React from 'react';

import InputBase from '@/components/common/Input/InputBase';

export default {
  title: 'Components/common/Inputs',
  component: InputBase,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputBase>;

const Template: ComponentStory<typeof InputBase> = (args) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 30%;
    `}
  >
    <InputBase value={'value'} />
    <InputBase rightPlaceholder={`0/10`} />
    <InputBase placeholder={'아이디 또는 이메일'} />
    <InputBase rightPlaceholder={<Image src={'/icon/inputReset.svg'} width={20} height={20} />} error />
    <InputBase type={'password'} />
  </div>
);

export const Default = Template.bind({});
