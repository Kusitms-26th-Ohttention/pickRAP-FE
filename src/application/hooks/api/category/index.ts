import { useQuery } from '@tanstack/react-query';

import { api } from '@/infra/api';

export const useGetCategories = () => {
  const { data, ...rest } = useQuery({ queryFn: api.category.getCategories });
  return { ...rest, categories: data?.data.data };
};
