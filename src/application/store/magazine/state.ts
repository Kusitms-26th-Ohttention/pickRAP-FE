import { atom, DefaultValue, selector, selectorFamily } from 'recoil';

import { EDIT_PAGE } from '@/application/utils/mock';

export interface EditPage {
  scrap_id: number;
  text: string;
  src: string;
}

export interface MagazineState {
  cover_scrap_id: number;
  open_status: boolean;
  start_number: number;
  page_list: EditPage[];
  title: string;
}

export const magazineState = atom<MagazineState>({
  key: 'MagzineState',
  default: {
    cover_scrap_id: 0,
    open_status: false,
    start_number: 0,
    page_list: EDIT_PAGE,
    title: '',
  },
  effects: [
    ({ onSet }) => {
      onSet((newState) => {
        console.debug('pages::', newState.page_list);
      });
    },
  ],
});

/**
 * page selectorFamily
 * 1. get: id 값에 따라 page_list[id] 반환
 * 2. set: id 별 text 변경
 */
export const pageSelector = selectorFamily<Partial<EditPage>, number>({
  key: 'PageSelector',
  get:
    (id) =>
    ({ get }) =>
      get(magazineState).page_list[id],
  set:
    (id) =>
    ({ set }, newValue) => {
      if (newValue instanceof DefaultValue) return;

      set(magazineState, (prevValue) => {
        const newPageList = [...prevValue.page_list];
        newPageList[id] = { ...newPageList[id], ...newValue };
        return { ...prevValue, page_list: newPageList };
      });
    },
});

export const magazineInfoSelector = selector<MagazineState>({
  key: 'MagazineInfoSelector',
  get: ({ get }) => get(magazineState),
  set: ({ set }, newValue) =>
    !(newValue instanceof DefaultValue) && set(magazineState, (prevValue) => ({ ...prevValue, ...newValue })),
});
