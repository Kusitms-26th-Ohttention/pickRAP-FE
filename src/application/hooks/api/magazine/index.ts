import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '@/infra/api';

export const useGetMagazines = () => {
  const { data, ...rest } = useQuery({ queryKey: ['getMagazines'], queryFn: api.magazine.getMagazines });
  const magazines = data?.data.data.map((thumb) => ({ ...thumb, type: 'thumbnail' as const }));
  return { magazines: magazines || [], ...rest };
};

export const useSaveMagazine = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.magazine.saveMagazine,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getMagazines'] }),
  });
};

export const useGetMagazineDetail = ({ id }: Parameters<typeof api.magazine.getMagazineDetail>[0]) => {
  const { data, ...rest } = useQuery({
    queryKey: ['getMagazineDetail', id],
    queryFn: () => api.magazine.getMagazineDetail({ id }),
  });
  return { magazine: data?.data.data, ...rest };
};

export const useUpdateMagazine = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateMagazine'],
    mutationFn: api.magazine.updateMagazine,
    onSuccess: (data, variables) => queryClient.invalidateQueries({ queryKey: ['getMagazineDetail', variables.id] }),
  });
};

export const useDeleteMagazines = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.magazine.deleteMagazines,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getMagazines'] }),
  });
};
export const useDeletePages = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.magazine.deletePages,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getMagazineDetail'] }),
  });
};

export const useMagazineCheckTitle = () => useMutation({ mutationFn: api.magazine.checkTitle });
