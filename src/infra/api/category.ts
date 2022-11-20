import { instance } from '@/infra/api/instance';
import type {
  DeleteCategoryRequest,
  GetCategoriesResponse,
  GetContentByCategoryRequest,
  GetContentByCategoryResponse,
  SaveCategoryRequest,
  SaveCategoryResponse,
} from '@/infra/api/types/category';
import type { UpdateScrapReqeust } from '@/infra/api/types/scrap';

class CategoryApi {
  constructor(private api: typeof instance) {}

  getCategories = () => this.api.get<GetCategoriesResponse>('/category');

  getContentByCategory = ({ id, pageParam }: GetContentByCategoryRequest) =>
    this.api.get<GetContentByCategoryResponse>(`/category/${id}?order_keyword=desc&pageParam=${pageParam || ''}`);

  saveCategory = (data: SaveCategoryRequest) => this.api.post<SaveCategoryResponse>('/category', data);

  modifyCategory = (data: UpdateScrapReqeust) => {
    return this.api.put(`/category/${data.id}`, { title: data.title });
  };
  deleteScrap = ({ id }: DeleteCategoryRequest) => {
    return this.api.delete(`/category/?id=${id}`);
  };
}

export default new CategoryApi(instance);
