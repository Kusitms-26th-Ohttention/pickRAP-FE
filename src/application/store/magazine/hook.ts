import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { magazineInfoSelector, magazineState, pageSelector } from '@/application/store/magazine/state';

export const useSetMagazineInfo = () => useSetRecoilState(magazineInfoSelector);
export const usePage = (id: number) => useRecoilState(pageSelector(id));
export const useMagazineInfo = () => useRecoilValue(magazineState);
export const useResetMagazineInfo = () => useResetRecoilState(magazineState);
