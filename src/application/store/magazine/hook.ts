import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import {
  magazineIdsArray,
  magazineInfoSelector,
  magazineState,
  pageIdsArray,
  pageSelector,
} from '@/application/store/magazine/state';

export const useSetMagazineInfo = () => useSetRecoilState(magazineInfoSelector);
export const usePage = (id: number) => useRecoilState(pageSelector(id));
export const useMagazineInfo = () => useRecoilValue(magazineState);
export const useResetMagazineInfo = () => useResetRecoilState(magazineState);

export const useMagazineDeleteList = () => useRecoilValue(magazineIdsArray);
export const usePageDeleteList = () => useRecoilValue(pageIdsArray);
