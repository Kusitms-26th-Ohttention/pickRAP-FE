import { instance } from '@/infra/api/instance';
import type {
  DeleteCategoryRequest,
  GetCategoriesResponse,
  GetContentByCategoryRequest,
  GetContentByCategoryResponse,
  SaveCategoryRequest,
  SaveCategoryResponse,
  UpdateCategoryRequest,
} from '@/infra/api/types/category';

class CategoryApi {
  constructor(private api: typeof instance) {}

  getCategories = () => this.api.get<GetCategoriesResponse>('/category');

  getContentByCategory = ({ id, pageParam }: GetContentByCategoryRequest) =>
    this.api.get<GetContentByCategoryResponse>(`/category/${id}?order_keyword=desc&page=${pageParam || ''}`);

  saveCategory = (data: SaveCategoryRequest) => this.api.post<SaveCategoryResponse>('/category', data);

  updateCategory = (data: UpdateCategoryRequest) => {
    return this.api.put(`/category/${data.id}`, { name: data.name });
  };
  deleteCategory = ({ ids }: DeleteCategoryRequest) => {
    const param = ids.reduce((acc, cur) => `${acc}${cur},`, '').slice(0, -1);
    return this.api.delete(`/category/?ids=${param}`);
  };
}

export default new CategoryApi(instance);
