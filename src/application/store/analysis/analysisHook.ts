import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { currentMonth, currentMonthSelector, currentYear } from './analysisState';

export const useGetCurrentYear = () => useRecoilValue(currentYear);
export const useSetCurrentYear = () => useSetRecoilState(currentYear);
export const useGetCurrentMonth = () => useRecoilValue(currentMonthSelector);
export const useSetCurrentMonth = () => useSetRecoilState(currentMonth);

export const useResetCurrentYear = () => useResetRecoilState(currentYear);
export const useResetCurrentMonth = () => useResetRecoilState(currentMonth);
