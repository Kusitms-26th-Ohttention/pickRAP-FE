import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '@/infra/api';
import type { GetScrapsResponse } from '@/infra/api/types/scrap';

// TODO 반복되는 useInfiniteQuery 내부 로직 리팩토링
export const useGetScrapByType = ({ filter }: Parameters<typeof api.scrap.getScrapByType>[0]) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['getScrapByType', filter],
    queryFn: ({ pageParam }) => api.scrap.getScrapByType({ filter, pageParam }),
    getNextPageParam: (lastPage) =>
      !lastPage.data.data.scrapResponses.last ? lastPage.data.data.nextScrapId : undefined,
  });

  const scraps = data
    ? data.pages
        .map((page) => page.data.data.scrapResponses.content)
        .reduce<GetScrapsResponse['scrapResponses']['content']>(
          (mergedContents, currentContents) => [...mergedContents, ...currentContents],
          [],
        )
    : [];

  return { ...rest, scraps };
};

export const useGetScrapBySearch = ({ search }: Parameters<typeof api.scrap.getScrapBySearch>[0]) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['getScrapBySearch', search],
    queryFn: ({ pageParam }) => api.scrap.getScrapBySearch({ search, pageParam }),
    getNextPageParam: (lastPage) =>
      !lastPage.data.data.scrapResponses.last ? lastPage.data.data.nextScrapId : undefined,
    enabled: !!search,
  });

  const scraps = data
    ? data.pages
        .map((page) => page.data.data.scrapResponses.content)
        .reduce<GetScrapsResponse['scrapResponses']['content']>(
          (mergedContents, currentContents) => [...mergedContents, ...currentContents],
          [],
        )
    : [];

  return { ...rest, scraps };
};

export const useGetScrapById = ({ id }: Optional<Parameters<typeof api.scrap.getScrapById>[0], 'id'>) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getScrapById', id],
    queryFn: () => api.scrap.getScrapById({ id: id as number }),
    enabled: typeof id === 'number' && !!id,
  });
  return { ...rest, scrap: data?.data.data };
};

export const useSaveScrap = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['saveScrap'],
    mutationFn: (args: Parameters<typeof api.scrap.saveScrap>[0]) => api.scrap.saveScrap(args),
    onSuccess: (d, v) => {
      queryClient.invalidateQueries(['getCategories', v.category_id]);
      queryClient.invalidateQueries(['getContentByCategory', v.category_id]);
    },
  });
};

export const useUpdateScrap = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateScrap'],
    mutationFn: (args: Parameters<typeof api.scrap.updateScrap>[0]) => api.scrap.updateScrap({ ...args, id }),
    onSuccess: () => queryClient.invalidateQueries(['getScrapById', id]),
  });
};
