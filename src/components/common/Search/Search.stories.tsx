import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Search from '.';

export default {
  title: 'Components/common/Search',
  component: Search,
  args: {
    onSubmit: (v) => console.log(v),
  },
} as ComponentMeta<typeof Search>;

export const Default: ComponentStory<typeof Search> = (args) => (
  <div style={{ display: 'flex', position: 'relative', width: '100%', justifyContent: 'flex-end' }}>
    <Search {...args} />
    테스트
  </div>
);
