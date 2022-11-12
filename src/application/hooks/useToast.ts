import type { ReactElement } from 'react';
import { useCallback } from 'react';

import { useToastContext } from '@/components/common/Toast/context';

interface ToastShowProps {
  content: ReactElement;
  id?: number;
}
const useToast = () => {
  const setToast = useToastContext()[1];
  const show = useCallback(
    ({ id = Date.now(), content }: ToastShowProps) => {
      setToast((prev) => [...prev, { id, content }]);
    },
    [setToast],
  );
  const close = useCallback(() => {
    setToast([]);
  }, [setToast]);
  const replace = useCallback(
    ({ id, content }: ToastShowProps) => {
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
