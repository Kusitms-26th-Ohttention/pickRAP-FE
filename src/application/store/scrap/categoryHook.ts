import { useRecoilValue, useResetRecoilState } from 'recoil';

import { categoryIdsArray, deleteCategoryList } from './categoryState';

export const useCategoryDeleteList = () => useRecoilValue(deleteCategoryList);
export const useResetCategoryDeleteList = () => useResetRecoilState(categoryIdsArray);
