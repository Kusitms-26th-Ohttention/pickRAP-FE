import { useRecoilValue, useResetRecoilState } from 'recoil';

import { categoryDeleteList, categoryIdsArray, scrapDeleteList, scrapIdsArray } from './categoryState';

export const useCategoryDeleteList = () => useRecoilValue(categoryDeleteList);
export const useResetCategoryDeleteList = () => useResetRecoilState(categoryIdsArray);

export const useScrapDeleteList = () => useRecoilValue(scrapDeleteList);
export const useResetScrapDeleteList = () => useResetRecoilState(scrapIdsArray);
