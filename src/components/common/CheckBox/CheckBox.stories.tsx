import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CheckBox from '@/components/common/CheckBox/index';

export default {
  title: 'Components/common/CheckBox',
  component: CheckBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 30%;
    `}
  >
    <CheckBox>hello</CheckBox>
    <CheckBox checked>hello</CheckBox>
  </div>
);

export const Default = Template.bind({});
