import { useRecoilValue } from 'recoil';

import { currentMonthSelector, currentYear } from './analysisState';

export const useGetCurrentYear = () => useRecoilValue(currentYear);
export const useGetCurrentMonth = () => useRecoilValue(currentMonthSelector);
