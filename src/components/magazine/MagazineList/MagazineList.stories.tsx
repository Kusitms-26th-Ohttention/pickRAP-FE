import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import MainMagazine from '@/components/magazine/MagazineList/MainMagazine';
import TabMagazine from '@/components/magazine/MagazineList/TabMagazine';

const MAGAZINE = {
  src: '/picture/mock.png',
  name: '나의 진로 계획',
};

export default {
  title: 'Components/magazine/MyMagazine',
  component: TabMagazine,
  args: {
    magazines: [0, 0, 0, 0].map(() => MAGAZINE),
    selectItem: true,
  },
} as ComponentMeta<typeof TabMagazine>;

export const Main: ComponentStory<typeof MainMagazine> = (args) => <MainMagazine {...args} />;
export const Tab: ComponentStory<typeof TabMagazine> = (args) => <TabMagazine {...args} />;
