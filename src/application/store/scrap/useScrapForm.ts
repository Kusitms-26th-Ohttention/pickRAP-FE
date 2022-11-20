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
  | { type: 'file'; data: Pick<ScarpForm, 'file'>['file'] }
  | { type: 'link'; data: string }
  | { type: 'text'; data: string };

const useScrapForm = () => {
  const [scrap, setScrap] = useRecoilState(scarpForm);

  // TODO reducer 비슷한데 더 좋은 방법 없을지?
  const handleScrap = useCallback(
    ({ type, data }: HandleScrapArgs) => {
      console.log('👀 UploadScrapState :::', type, data);
      switch (type) {
        case 'category':
          setScrap((prev) => ({ ...prev, category_id: data }));
          break;
        case 'file':
          setScrap((prev) => ({ ...prev, file: data, scrap_type: 'image' }));
          break;
        case 'text':
          setScrap((prev) => ({ ...prev, content: data, scrap_type: 'text' }));
          break;
        case 'link':
          setScrap((prev) => ({ ...prev, content: data, scrap_type: 'link' }));
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

  return [scrap, handleScrap, setRequest] as const;
};

export default useScrapForm;
