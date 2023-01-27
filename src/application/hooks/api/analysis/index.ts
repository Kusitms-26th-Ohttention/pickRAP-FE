import { useQuery } from '@tanstack/react-query';

import { api } from '@/infra/api';

export const useGetAnalysis = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getAnalysis'],
    queryFn: api.analysis.getAnalysis,
  });
  return { allAnalysis: data?.data.data || [], ...rest };
};

export const useGetTagAnalysisForYear = (year: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getTagAnalysisForYear', year],
    queryFn: () => api.analysis.getTagAnalysisForYear({ year }),
  });
  return { yearAnalysis: data?.data.data || [], ...rest };
};

export const useGetTagAnalysisForYearMonth = (year: number, month: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getTagAnalysisForYearMonth', year, month],
    queryFn: () => api.analysis.getTagAnalysisForYearMonth({ year, month }),
  });
  return { monthAnalysis: data?.data.data || [], ...rest };
};
