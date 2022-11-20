import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { api } from '@/infra/api';
import type { GetContentByCategoryResponse } from '@/infra/api/types/category';

export const useGetCategories = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getCategories'],
    queryFn: api.category.getCategories,
    cacheTime: Infinity,
    staleTime: 100000,
  });
  return { ...rest, categories: data?.data.data || [] };
};

export const useGetContentByCategory = ({ id }: Parameters<typeof api.category.getContentByCategory>[0]) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['getContentByCategory', id],
    queryFn: ({ pageParam }) => api.category.getContentByCategory({ id, pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.data.data.numberOfElement
        ? lastPage.data.data.pageable.offset + lastPage.data.data.pageable.pageSize
        : undefined,
  });

  const categories = data
    ? data.pages
        .map((page) => page.data.data.content)
        .reduce<GetContentByCategoryResponse['content']>(
          (mergedContents, currentContents) => [...mergedContents, ...currentContents],
          [],
        )
    : [];

  return { ...rest, categories };
};
