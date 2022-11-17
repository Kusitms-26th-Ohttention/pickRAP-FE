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

export type GetCategoriesResponse = Category[];
export type DeleteCategoryRequest = SaveCategoryRequest;
