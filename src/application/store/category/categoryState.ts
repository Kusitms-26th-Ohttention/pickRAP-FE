import { atom } from 'recoil';

export const categoryIdsArray = atom<Array<number>>({
  key: 'categoryIdsArray',
  default: [],
});
