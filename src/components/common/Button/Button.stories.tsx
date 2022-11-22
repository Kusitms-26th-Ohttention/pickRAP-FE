import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AccentButton } from '@/components/common/Button/AccentButton';
import { ActiveButton } from '@/components/common/Button/ActiveButton';
import ButtonBase from '@/components/common/Button/ButtonBase';

export default {
  title: 'Components/common/Buttons',
  component: ButtonBase,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonBase>;

const Template: ComponentStory<typeof ButtonBase> = (args) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 30%;
    `}
  >
    <ButtonBase>hello</ButtonBase>
    <ActiveButton active>다음</ActiveButton>
    <ActiveButton>다음</ActiveButton>
    <AccentButton>계정 생성하기</AccentButton>
  </div>
);

export const Default = Template.bind({});
