import { useQuery } from '@tanstack/react-query';

import { api } from '@/infra/api';

export const useGetAnalysis = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getAnalysis'],
    queryFn: api.analysis.getAnalysis,
  });
  return { allAnalysis: data?.data.data || [], ...rest };
};
