import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ActiveButton } from '@/components/common/Button/ActiveButton';
import ButtonBase from '@/components/common/Button/ButtonBase';
import { KakaoButton, NaverButton } from '@/components/common/Button/OAuthButton';

export default {
  title: 'Components/Buttons',
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
    <KakaoButton />
    <NaverButton />
  </div>
);

export const Default = Template.bind({});
