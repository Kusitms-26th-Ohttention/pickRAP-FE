import { useRecoilValue, useResetRecoilState } from 'recoil';

import { scrapIdsArray } from './scrapState';

export const useScrapDeleteList = () => useRecoilValue(scrapIdsArray);
export const useResetScrapDeleteList = () => useResetRecoilState(scrapIdsArray);
