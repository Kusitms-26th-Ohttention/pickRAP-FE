import type { ReactElement } from 'react';
import { useCallback } from 'react';

import useToast from '@/application/hooks/common/useToast';
import Popup from '@/components/common/Popup';

const usePopup = () => {
  const { show, close } = useToast();

  return useCallback(
    (message: string | ReactElement, type: 'success' | 'warn') => {
      close();
      show({ content: <Popup type={type}>{message}</Popup>, type: 'popup' });
    },
    [close, show],
  );
};

export default usePopup;
