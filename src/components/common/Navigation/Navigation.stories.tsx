import { css } from '@emotion/react';
import type { ComponentStory } from '@storybook/react';
import React from 'react';

import TopNavigation from '@/components/common/Navigation/TopNavigation';

export default {
  title: 'Components/common/Navigation',
  component: null,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: ComponentStory<any> = (args) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 30%;
    `}
  >
    <TopNavigation>타이틀</TopNavigation>
  </div>
);

export const Default = Template.bind({});
