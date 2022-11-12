import { css } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { useToastContext } from '@/components/common/Toast/context';
import Template from '@/components/common/Toast/Template';

const Manager = () => {
  const toasts = useToastContext()[0];
  return (
    <section
      css={css`
        bottom: 0;
        width: 100vw;
        max-width: 440px;
        left: 50%;
        transform: translateX(-50%);
        height: 100vh;
        z-index: 9999;
        position: fixed;
        pointer-events: none;
      `}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <Template id={toast.id} key={toast.id}>
            {toast.content}
          </Template>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Manager;
