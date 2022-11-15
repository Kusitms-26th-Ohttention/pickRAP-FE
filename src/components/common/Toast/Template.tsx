import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import React from 'react';

import useClickOutside from '@/application/hooks/useClickOutside';
import useTimeout from '@/application/hooks/useTimeout';
import useToast from '@/application/hooks/useToast';

interface TemplateProps {
  children: ReactElement | string;
  id: number;
}

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

export const ToastTemplate = ({ children }: TemplateProps) => {
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
      {children}
    </motion.div>
  );
};

const POPUP_TIMEOUT_DELAY = 1000;

export const PopupTemplate = ({ children }: TemplateProps) => {
  const { close } = useToast();
  const ref = useClickOutside<HTMLDivElement>(close);
  useTimeout(close, POPUP_TIMEOUT_DELAY);

  return (
    <motion.div
      layout
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      css={(theme) => css`
        padding: 24px 16px;
        background: ${theme.color.white01};
        position: absolute;
        width: 86vw;
        max-width: 380px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 1;
        pointer-events: auto;

        box-shadow: 0 8px 11px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
      `}
    >
      {children}
    </motion.div>
  );
};
