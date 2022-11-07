import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import InputBase from '@/components/common/Input/InputBase';

export default {
  title: 'Components/Inputs',
  component: InputBase,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
    <InputBase />
    <InputBase rightPlaceholder={`I'm right`} />
    <InputBase placeholder={'아이디 또는 이메일'} />
    <InputBase rightPlaceholder={<button>btn</button>} />
    <InputBase rightPlaceholder={<button>btn</button>} errMsg={'Error'} />
  </div>
);

export const Default = Template.bind({});
