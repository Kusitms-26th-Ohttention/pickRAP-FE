import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import React from 'react';

import useToast from '@/application/hooks/common/useToast';
import useClickOutside from '@/application/hooks/utils/useClickOutside';

const ModalTemplate = ({ children }: PropsWithChildren) => {
  const { close } = useToast();
  const ref = useClickOutside<HTMLDivElement>(close);
  return (
    <motion.div
      layout
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      css={(theme) => css`
        background: ${theme.color.white01};
        position: absolute;
        width: calc(100% - 32px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 1000;
        pointer-events: auto;

        box-shadow: 0 8px 11px rgba(0, 0, 0, 0.1);
        border-radius: 6px;

        overflow: hidden;
      `}
    >
      {children}
    </motion.div>
  );
};

export default ModalTemplate;
