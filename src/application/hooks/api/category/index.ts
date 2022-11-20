import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '@/infra/api';
import type { GetContentByCategoryResponse } from '@/infra/api/types/category';

export const useGetCategories = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['getCategories'],
    queryFn: api.category.getCategories,
  });
  return { ...rest, categories: data?.data.data || [] };
};

export const useGetContentByCategory = ({ id }: Parameters<typeof api.category.getContentByCategory>[0]) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['getContentByCategory', id],
    queryFn: ({ pageParam }) => api.category.getContentByCategory({ id, pageParam }),
    getNextPageParam: (lastPage) =>
      !lastPage.data.data.scrapResponses.last ? lastPage.data.data.nextScrapId : undefined,
  });

  const categories = data
    ? data.pages
        .map((page) => page.data.data.scrapResponses.content)
        .reduce<GetContentByCategoryResponse['scrapResponses']['content']>(
          (mergedContents, currentContents) => [...mergedContents, ...currentContents],
          [],
        )
    : [];

  return { ...rest, categories };
};

export const useSaveCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.category.saveCategory,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getCategories'] }),
  });
};
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.category.updateCategory,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getCategories'] }),
  });
};
export const useDeleteCategory = () => useMutation({ mutationFn: api.category.deleteCategory });
