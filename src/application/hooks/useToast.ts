import { useCallback } from 'react';

import type { ToastContentProps } from '@/components/common/Toast';
import { useToastContext } from '@/components/common/Toast';

const useToast = () => {
  const setToast = useToastContext()[1];
  const show = useCallback(
    ({ id = Date.now(), ...rest }: Optional<ToastContentProps, 'id'>) => setToast((prev) => [...prev, { id, ...rest }]),
    [setToast],
  );

  const close = useCallback(() => {
    setToast([]);
  }, [setToast]);

  const replace = useCallback(
    ({ id, ...rest }: Optional<ToastContentProps, 'id'>) => {
      if (!id) {
        setToast((prev) => {
          const ret = prev.map((toast) => ({ ...toast }));
          ret[ret.length - 1] = {
            ...rest,
            id: Date.now(),
          };
          return ret;
        });
      } else {
        // TODO 로직 마저 작성
        // setToast((prev) => prev.filter((toast) => toast.id !== id));
      }
    },
    [setToast],
  );

  return { show, replace, close };
};

export default useToast;
