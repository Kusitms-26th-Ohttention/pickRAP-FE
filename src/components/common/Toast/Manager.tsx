import { css } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import ModalTemplate from '@/components/common/Modal/Template';
import PopupTemplate from '@/components/common/Popup/Template';
import { useToastContext } from '@/components/common/Toast/context';
import ToastTemplate, { BackDrop } from '@/components/common/Toast/Template';

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
        z-index: 1000; // TODO z-index 정리
        position: fixed;
        pointer-events: none;
      `}
    >
      <AnimatePresence>
        {toasts.map((toast) =>
          toast.type === 'popup' ? (
            <PopupTemplate key={toast.id}>{toast.content}</PopupTemplate>
          ) : toast.type === 'modal' ? (
            <ModalTemplate key={toast.id}> {toast.content}</ModalTemplate>
          ) : (
            <ToastTemplate key={toast.id}>{toast.content}</ToastTemplate>
          ),
        )}

        {toasts.length > 0 && <BackDrop />}
      </AnimatePresence>
    </section>
  );
};

export default Manager;
