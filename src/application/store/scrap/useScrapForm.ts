import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import type { ScarpForm } from '@/application/store/scrap/scarpForm';
import { scarpForm } from '@/application/store/scrap/scarpForm';

type HandleScrapArgs =
  | {
      type: 'category';
      data: Pick<ScarpForm, 'category_id'>['category_id'];
    }
  | { type: 'information'; data: Pick<ScarpForm, 'title' | 'hashtags' | 'memo'> }
  | { type: 'image' | 'video' | 'pdf'; data: Pick<ScarpForm, 'file'>['file'] }
  | { type: 'link' | 'text'; data: string };

const useScrapForm = () => {
  const [scrap, setScrap] = useRecoilState(scarpForm);

  const handleScrap = useCallback(
    ({ type, data }: HandleScrapArgs) => {
      switch (type) {
        case 'category':
          setScrap((prev) => ({ ...prev, category_id: data }));
          break;
        case 'image':
        case 'video':
        case 'pdf':
          setScrap((prev) => ({ ...prev, file: data, scrap_type: type }));
          break;
        case 'text':
        case 'link':
          setScrap((prev) => ({ ...prev, content: data, scrap_type: type }));
          break;
        case 'information':
          setScrap((prev) => ({ ...prev, ...data }));
          break;
      }
    },
    [setScrap],
  );

  const setRequest = useCallback(
    <T extends (...args: any[]) => any>(uploadRequest: T) => {
      setScrap((prev) => ({ ...prev, uploadRequest }));
    },
    [setScrap],
  );

  return { scrap, handleScrap, setRequest } as const;
};

export default useScrapForm;
