import { useRecoilValue, useResetRecoilState } from 'recoil';

import { scrapIdsArray, scrapReSearching } from './scrapState';

export const useScrapDeleteList = () => useRecoilValue(scrapIdsArray);
export const useResetScrapDeleteList = () => useResetRecoilState(scrapIdsArray);
export const useGetScrapReSearching = () => useRecoilValue(scrapReSearching);
