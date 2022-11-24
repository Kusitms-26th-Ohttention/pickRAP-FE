import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { editPageState } from '@/application/store/edit/state';

export const useEditPageValue = () => useRecoilValue(editPageState);
export const useEditPageSet = () => {
  const set = useSetRecoilState(editPageState);
  const setPage = (id: number, page: Partial<EditPage>) =>
    set((prev) => {
      const ret = [...prev];
      ret[id] = { ...ret[id], ...page };
      return ret;
    });
  return [setPage, set] as const;
};
export const useEditPageReset = () => useResetRecoilState(editPageState);
