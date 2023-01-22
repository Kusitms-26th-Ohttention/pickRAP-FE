import { useRecoilValue, useResetRecoilState } from 'recoil';

import { categoryIdsArray } from './categoryState';

export const useCategoryDeleteList = () => useRecoilValue(categoryIdsArray);
export const useResetCategoryDeleteList = () => useResetRecoilState(categoryIdsArray);
