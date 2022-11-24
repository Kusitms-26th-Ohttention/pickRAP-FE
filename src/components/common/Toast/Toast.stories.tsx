import { css } from '@emotion/react';
import type { ComponentStory } from '@storybook/react';
import React from 'react';

import { ToastContext, ToastSetContext } from '@/components/common/Toast/context';
import Manager from '@/components/common/Toast/Manager';
import ToastPortal from '@/components/common/Toast/Portal';

export default {
  title: 'Components/common/Toast',
  component: ToastPortal,
  args: {},
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
    <ToastContext.Provider value={[{ id: 2, content: <button>world</button> }]}>
      <ToastSetContext.Provider value={() => true}>
        <Manager />
      </ToastSetContext.Provider>
    </ToastContext.Provider>
  </div>
);

export const Default = Template.bind({});
