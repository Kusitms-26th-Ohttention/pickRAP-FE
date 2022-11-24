import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import React from 'react';

import useToast from '@/application/hooks/common/useToast';
import useClickOutside from '@/application/hooks/utils/useClickOutside';
import { ThreeDotsSpinner } from '@/components/common/Spinner';
import SSRSafeSuspense from '@/containers/Suspense';

export const BackDrop = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    css={css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      pointer-events: auto;
      background: rgba(0, 0, 0, 0.2);
    `}
  />
);

const ToastTemplate = ({ children }: PropsWithChildren) => {
  const { close } = useToast();
  const ref = useClickOutside<HTMLDivElement>(close);

  return (
    <motion.div
      layout
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ type: 'spring', duration: 0.4 }}
      ref={ref}
      css={(theme) => css`
        padding: 24px 16px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: ${theme.color.white01};
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        pointer-events: auto;
      `}
    >
      <SSRSafeSuspense fallback={<ThreeDotsSpinner />}>{children}</SSRSafeSuspense>
    </motion.div>
  );
};

export default ToastTemplate;
