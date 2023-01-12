import { atom, DefaultValue, selector } from 'recoil';

export const categoryIdsArray = atom<Array<number>>({
  key: 'categoryIdsArray',
  default: [],
});

export const deleteCategoryList = selector({
  key: 'deleteCategoryList',
  get: ({ get }) => get(categoryIdsArray),
  set: ({ set }, newValue) =>
    !(newValue instanceof DefaultValue) && set(categoryIdsArray, (prevValue) => [...prevValue, ...newValue]),
});
