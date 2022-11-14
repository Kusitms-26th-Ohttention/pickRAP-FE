import { css } from '@emotion/react';
import type { ComponentStory } from '@storybook/react';
import React from 'react';

import Tab from '@/components/common/Tab/index';

export default {
  title: 'Components/common/Tab',
  component: null,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: ComponentStory<any> = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
    `}
  >
    <Tab>
      <Tab.Group>
        <Tab.Label>카테고리 별</Tab.Label>
        <Tab.Label>콘텐츠 별</Tab.Label>
      </Tab.Group>
      <Tab.Panel>
        <Tab.Content>
          <div>안녕하세요</div>
          <div>안녕하세요</div>
          <div>안녕하세요</div>
        </Tab.Content>
        <Tab.Content>world</Tab.Content>
      </Tab.Panel>
    </Tab>
  </div>
);

export const Default = Template.bind({});
