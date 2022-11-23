import { useRecoilState } from 'recoil';

import { magazineInfoSelector, pageSelector } from '@/application/store/magazine/state';

export const useMagazineInfo = () => useRecoilState(magazineInfoSelector);
export const usePage = (id: number) => useRecoilState(pageSelector(id));
