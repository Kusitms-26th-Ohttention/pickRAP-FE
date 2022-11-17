import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import MainMagazine from '@/components/magazine/MagazineList/MainMagazine';
import OtherMagazine from '@/components/magazine/MagazineList/OtherMagazine';

const MAGAZINE = {
  src: '/picture/mock.png',
  name: '나의 진로 계획',
};

export default {
  title: 'Components/magazine/MyMagazine',
  component: OtherMagazine,
  args: {
    magazines: [0, 0, 0, 0].map(() => MAGAZINE),
    selectItem: true,
  },
} as ComponentMeta<typeof OtherMagazine>;

export const Main: ComponentStory<typeof MainMagazine> = (args) => <MainMagazine {...args} />;
export const Other: ComponentStory<typeof OtherMagazine> = (args) => <OtherMagazine {...args} />;
