import { useQuery } from '@tanstack/react-query';

import { api } from '@/infra/api';

export const useGetAnalysis = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getAnalysis'],
    queryFn: api.analysis.getAnalysis,
  });

  const allAnalysis: Analysis = data?.data.data || { hashtags: [], texts: [], personal_mood_results: [] };

  return { allAnalysis, ...rest };
};

export const useGetTagAnalysisForYearMonth = (year: number, month: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getTagAnalysisForYearMonth', year, month],
    queryFn: () => api.analysis.getTagAnalysisForYearMonth({ year, month }),
  });

  const detailAnalysis: Analysis = data?.data.data || { hashtags: [], texts: [], personal_mood_results: [] };

  return { detailAnalysis, ...rest };
};

export const useGetRevisitAnalysis = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getRevisitAnalysis'],
    queryFn: api.analysis.getRevisitAnalysis,
  });
  return { revisitAnalysis: data?.data.data || [], ...rest };
};
