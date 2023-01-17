import { atom, DefaultValue, selector } from 'recoil';

export const categoryIdsArray = atom<Array<number>>({
  key: 'categoryIdsArray',
  default: [],
});

export const categoryDeleteList = selector({
  key: 'categoryDeleteList',
  get: ({ get }) => get(categoryIdsArray),
  set: ({ set }, newValue) =>
    !(newValue instanceof DefaultValue) && set(categoryIdsArray, (prevValue) => [...prevValue, ...newValue]),
});

// 카테고리 세부 아이템, 타입별 콘텐츠 동시에 사용할 값
export const scrapIdsArray = atom<Array<number>>({
  key: 'categoryDetailIdsArray',
  default: [],
});

export const scrapDeleteList = selector({
  key: 'categoryItemDeleteList',
  get: ({ get }) => get(scrapIdsArray),
  set: ({ set }, newValue) =>
    !(newValue instanceof DefaultValue) && set(scrapIdsArray, (prevValue) => [...prevValue, ...newValue]),
});
