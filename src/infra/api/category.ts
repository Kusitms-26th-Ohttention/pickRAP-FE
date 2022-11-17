import { instance } from '@/infra/api/instance';
import type {
  DeleteCategoryRequest,
  GetCategoriesResponse,
  SaveCategoryRequest,
  SaveCategoryResponse,
} from '@/infra/api/types/category';
import type { ModifyScrapRequest } from '@/infra/api/types/scrap';

class CategoryApi {
  constructor(private api: typeof instance) {}
  getCategories = () => {
    return this.api.get<GetCategoriesResponse>('/category');
  };

  saveCategory = (data: SaveCategoryRequest) => {
    return this.api.post<SaveCategoryResponse>('/category', data);
  };
  modifyCategory = (data: ModifyScrapRequest) => {
    return this.api.put(`/category/${data.id}`, { title: data.title });
  };
  deleteScrap = ({ id }: DeleteCategoryRequest) => {
    return this.api.delete(`/category/?id=${id}`);
  };
}

export default new CategoryApi(instance);
