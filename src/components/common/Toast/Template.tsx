import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import React from 'react';

import useClickOutside from '@/application/hooks/useClickOutside';
import useToast from '@/application/hooks/useToast';

interface TemplateProps {
  children: ReactElement | string;
  id: number;
}

/**
 * @todo
 *  toast 종류에 따라 Template 에 애니메이션/스타일링 추가
 *  backdrop 여부
 */
const Template = ({ children }: TemplateProps) => {
  const { close } = useToast();
  const ref = useClickOutside<HTMLDivElement>(close);

  return (
    <>
      <motion.div
        layout
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', bounce: 0.4, duration: 0.4 }}
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
    </>
  );
};

export default Template;
