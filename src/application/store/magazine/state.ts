import { atom, DefaultValue, selector, selectorFamily } from 'recoil';

export interface MagazineState {
  cover_scrap_id: number;
  cover_scrap_placeholder?: string;
  cover_scrap_src: string;
  open_status: boolean;
  start_number: number;
  page_list: EditPage[];
  title: string;
}

export const magazineState = atom<MagazineState>({
  key: 'MagzineState',
  default: {
    cover_scrap_id: 0,
    cover_scrap_placeholder: '',
    cover_scrap_src: '',
    open_status: false,
    start_number: 2,
    page_list: [],
    title: '제목',
  },
  effects: [
    ({ onSet }) => {
      onSet((newState) => {
        console.debug('magazine state ::', newState);
      });
    },
  ],
});

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

export const magazineInfoSelector = selector<Partial<MagazineState>>({
  key: 'MagazineInfoSelector',
  get: ({ get }) => get(magazineState),
  set: ({ set }, newValue) =>
    !(newValue instanceof DefaultValue) && set(magazineState, (prevValue) => ({ ...prevValue, ...newValue })),
});

export const multiDelete = atom({
  key: 'multiDelete',
  default: false,
});

export const magazineIdsArray = atom<Array<number>>({
  key: 'magazineIdsArray',
  default: [],
});

export const pageIdsArray = atom<Array<number>>({
  key: 'pageIdsArray',
  default: [],
});

export const magazineCoverId = atom({
  key: 'magazineCoverId',
  default: '',
});
