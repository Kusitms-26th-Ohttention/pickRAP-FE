import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/infra/api';
import type { GetScrapsResponse } from '@/infra/api/types/scrap';

// TODO 반복되는 useInfiniteQuery 내부 로직 리팩토링
export const useGetScrapByType = ({ filter }: Parameters<typeof api.scrap.getScrapByType>[0]) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['getScrapByType', filter],
    queryFn: ({ pageParam }) => api.scrap.getScrapByType({ filter, pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.data.data.numberOfElement
        ? lastPage.data.data.pageable.offset + lastPage.data.data.pageable.pageSize
        : undefined,
  });

  const scraps = data
    ? data.pages
        .map((page) => page.data.data.content)
        .reduce<GetScrapsResponse['content']>(
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
      lastPage.data.data.numberOfElement
        ? lastPage.data.data.pageable.offset + lastPage.data.data.pageable.pageSize
        : undefined,
    // enabled: !!search,
  });

  const scraps = data
    ? data.pages
        .map((page) => page.data.data.content)
        .reduce<GetScrapsResponse['content']>(
          (mergedContents, currentContents) => [...mergedContents, ...currentContents],
          [],
        )
    : [];

  return { ...rest, scraps };
};

export const useSaveScrap = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['saveScrap'],
    mutationFn: (args: Parameters<typeof api.scrap.saveScrap>[0]) => api.scrap.saveScrap(args),
    onSuccess: () => queryClient.clear(),
  });
};
