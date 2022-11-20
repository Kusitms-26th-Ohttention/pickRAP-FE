import type { GetScrapsResponse } from '@/infra/api/types/scrap';

export interface GetContentByCategoryRequest {
  id: number;
  pageParam?: number;
}

export interface SaveCategoryRequest {
  name: string;
}

export interface SaveCategoryResponse {
  id: number;
  name: string;
}

export interface UpdateCategoryRequest {
  id: number;
  name: string;
}

export type GetContentByCategoryResponse = GetScrapsResponse;

export type GetCategoriesResponse = Category[];
export interface DeleteCategoryRequest {
  ids: number[];
}
