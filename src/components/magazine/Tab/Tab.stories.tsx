import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TabMagazine from '@/components/magazine/MagazineList/TabMagazine';

import Tab from '.';

const MAGAZINE = {
  src: '/picture/mock.png',
  name: '나의 진로 계획',
};
const MOCK_DATA = [0, 0, 0, 0].map(() => MAGAZINE);

export default {
  title: 'Components/magazine/Tab',
  component: Tab,
  args: {
    myMagazine: <TabMagazine selectItem magazines={MOCK_DATA} />,
    savedMagazine: <TabMagazine magazines={MOCK_DATA} />,
  },
} as ComponentMeta<typeof Tab>;

export const Default: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;
