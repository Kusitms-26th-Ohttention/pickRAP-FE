import { useCallback } from 'react';

import type { ToastContentProps } from '@/components/common/Toast';
import { useToastContext } from '@/components/common/Toast';

const useToast = () => {
  const setToast = useToastContext()[1];
  const show = useCallback(
    ({ id = Date.now(), content }: Optional<ToastContentProps, 'id'>) => setToast((prev) => [...prev, { id, content }]),
    [setToast],
  );

  const close = useCallback(() => {
    setToast([]);
  }, [setToast]);

  const replace = useCallback(
    ({ id, content }: Optional<ToastContentProps, 'id'>) => {
      if (!id) {
        setToast((prev) => {
          const ret = prev.map((toast) => ({ ...toast }));
          ret[ret.length - 1].content = content;
          return ret;
        });
      } else {
        setToast((prev) => prev.filter((toast) => toast.id !== id));
      }
    },
    [setToast],
  );

  return { show, replace, close };
};

export default useToast;
