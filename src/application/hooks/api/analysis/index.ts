import { useQuery } from '@tanstack/react-query';

import { api } from '@/infra/api';

export const useGetAnalysis = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getAnalysis'],
    queryFn: api.analysis.getAnalysis,
  });
  return { allAnalysis: data?.data.data || [], ...rest };
};

export const useGetTagAnalysisForYearMonth = (year: number, month: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getTagAnalysisForYearMonth', year, month],
    queryFn: () => api.analysis.getTagAnalysisForYearMonth({ year, month }),
  });
  return { detailAnalysis: data?.data.data || [], ...rest };
};

export const useGetRevisitAnalysis = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getRevisitAnalysis'],
    queryFn: api.analysis.getRevisitAnalysis,
  });
  return { revisitAnalysis: data?.data.data || [], ...rest };
};
