import { useQuery } from '@tanstack/react-query';

import { api } from '@/infra/api';

const useGetCategories = () => useQuery({ queryFn: api.category.getCategories });

export default useGetCategories;
