import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import React from 'react';

import useToast from '@/application/hooks/common/useToast';
import useClickOutside from '@/application/hooks/utils/useClickOutside';
import useTimeout from '@/application/hooks/utils/useTimeout';

const POPUP_TIMEOUT_DELAY = 1000;

const PopupTemplate = ({ children }: PropsWithChildren) => {
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
        background: ${theme.color.white01};
        position: absolute;
        width: 86vw;
        /* TODO 해시태그 작성 팝업창은 height길이가 175px이어야함  */
        height: 150px;
        max-width: 240px;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 1;
        pointer-events: auto;

        box-shadow: 0 8px 11px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      `}
    >
      {children}
    </motion.div>
  );
};

export default PopupTemplate;
