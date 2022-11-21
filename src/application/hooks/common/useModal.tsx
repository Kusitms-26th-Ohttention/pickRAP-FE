import type { ReactElement } from 'react';
import { useCallback } from 'react';

import useToast from '@/application/hooks/common/useToast';
import Confirm from '@/components/common/Modal/Confirm';

const useModal = () => {
  const { show: showToast, close } = useToast();

  const confirm = useCallback(
    (message: string, { ...rest }: { onSuccess: () => void }) => {
      close();
      showToast({
        content: <Confirm title={message} {...rest} onReject={close} />,
        type: 'modal',
      });
    },
    [close, showToast],
  );

  const show = useCallback(
    (content: ReactElement) => {
      close();
      showToast({ content, type: 'modal' });
    },
    [close, showToast],
  );

  return { confirm, show };
};

export default useModal;
