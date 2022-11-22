import { css } from '@emotion/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Chip from '@/components/common/Chip';

export default {
  title: 'Components/common/Chip',
  component: Chip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 30%;
    `}
  >
    <Chip size={'small'}>#작은 해시태그</Chip>
    <Chip size={'large'}>#큰 해시태그</Chip>
    <Chip active size={'small'}>
      #해시태그
    </Chip>
    <Chip active size={'large'}>
      #해시태그
    </Chip>
  </div>
);

export const Default = Template.bind({});
