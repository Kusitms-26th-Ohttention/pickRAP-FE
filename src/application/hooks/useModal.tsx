import { useCallback } from 'react';

import useToast from '@/application/hooks/useToast';
import Confirm from '@/components/common/Modal/Confirm';

const usePopup = () => {
  const { show, close } = useToast();

  return useCallback(
    (message: string) => {
      close();
      show({ content: <Confirm title={message} />, type: 'modal' });
    },
    [close, show],
  );
};

export default usePopup;
