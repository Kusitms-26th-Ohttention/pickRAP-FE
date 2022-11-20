import { instance } from '@/infra/api/instance';
import type {
  DeleteScrapRequest,
  GetScrapBySearchRequest,
  GetScrapByTypeRequest,
  GetScrapDetailRequest,
  GetScrapDetailResponse,
  GetScrapsResponse,
  ModifyScrapRequest,
  SaveScrapRequest,
} from '@/infra/api/types/scrap';

class ScrapApi {
  constructor(private api: typeof instance) {}
  getScrapBySearch = ({ search, pageParam }: GetScrapBySearchRequest) =>
    this.api.get<GetScrapsResponse>(`/scrap?search_keyword=${search}&order_keyword=desc&page=${pageParam || ''}`);

  getScrapById = ({ id }: GetScrapDetailRequest) => this.api.get<GetScrapDetailResponse>(`/scrap/${id}`);

  getScrapByType = ({ filter, pageParam }: GetScrapByTypeRequest) =>
    this.api.get<GetScrapsResponse>(`/scrap/type/${filter}?order_keyword=desc&page=${pageParam || ''}`);

  saveScrap = ({ file, ...rest }: SaveScrapRequest) => {
    const request = new FormData();
    request.append('file', file);
    request.append('scrap_request', new Blob([JSON.stringify({ ...rest })], { type: 'application/json' }));

    return this.api.post('/scrap', request);
  };
  modifyScrap = (data: ModifyScrapRequest) => {
    return this.api.put('/scrap', data);
  };
  deleteScrap = ({ id }: DeleteScrapRequest) => {
    return this.api.delete(`/scrap/?id=${id}`);
  };
}

export default new ScrapApi(instance);
