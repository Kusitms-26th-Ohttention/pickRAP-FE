import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import OtherMagazine from '@/components/magazine/MagazineList/OtherMagazine';

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
    myMagazine: <OtherMagazine selectItem magazines={MOCK_DATA} />,
    savedMagazine: <OtherMagazine magazines={MOCK_DATA} />,
  },
} as ComponentMeta<typeof Tab>;

export const Default: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;
