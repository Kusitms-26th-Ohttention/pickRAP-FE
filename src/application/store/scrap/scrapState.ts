import { atom } from 'recoil';

// 카테고리 세부 아이템, 타입별 콘텐츠 동시에 사용할 값
export const scrapIdsArray = atom<Array<number>>({
  key: 'categoryDetailIdsArray',
  default: [],
});
