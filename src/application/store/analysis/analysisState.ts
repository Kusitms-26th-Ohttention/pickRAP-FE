import { atom, selector } from 'recoil';

export const tagDetailState = atom({
  key: 'tagDetailState',
  default: false,
});

export const revisitDetailState = atom({
  key: 'revisitDetailState',
  default: false,
});

export const currentYear = atom({
  key: 'currentYear',
  default: new Date().getFullYear(),
});

export const currentMonth = atom({
  key: 'currentMonth',
  default: new Date().getMonth(),
});

export const currentMonthSelector = selector({
  key: 'currentMonthSelector',
  get: ({ get }) => {
    const month = get(currentMonth);
    return month + 1;
  },
});
