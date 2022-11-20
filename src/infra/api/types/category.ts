import type { GetScrapsResponse } from '@/infra/api/types/scrap';

export interface GetContentByCategoryRequest {
  id: number;
  pageParam?: number;
}

export interface SaveCategoryRequest {
  id: string;
}

export interface SaveCategoryResponse {
  id: number;
  name: string;
}

export interface ModifyCategoryRequest {
  id: number;
  name: string;
}

export type GetContentByCategoryResponse = GetScrapsResponse;

export type GetCategoriesResponse = Category[];
export type DeleteCategoryRequest = SaveCategoryRequest;
