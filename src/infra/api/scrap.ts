import { instance } from '@/infra/api/instance';
import type {
  DeleteScrapRequest,
  GetScrapBySearchRequest,
  GetScrapByTypeRequest,
  GetScrapDetailRequest,
  GetScrapDetailResponse,
  GetScrapsResponse,
  SaveScrapRequest,
  UpdateScrapReqeust,
} from '@/infra/api/types/scrap';

class ScrapApi {
  constructor(private api: typeof instance) {}
  getScrapBySearch = ({ search, pageParam }: GetScrapBySearchRequest) =>
    this.api.get<GetScrapsResponse>(`/scrap?search_keyword=${search}&order_keyword=desc&page=${pageParam || ''}`);

  getScrapById = ({ id }: GetScrapDetailRequest) => this.api.get<GetScrapDetailResponse>(`/scrap/${id}`);

  getScrapByType = ({ filter, pageParam }: GetScrapByTypeRequest) =>
    this.api.get<GetScrapsResponse>(`/scrap/type/${filter}?page=${pageParam || ''}&order_keyword=desc`);

  saveScrap = ({ file, ...rest }: SaveScrapRequest) => {
    const request = new FormData();
    request.append('file', file);
    request.append('scrap_request', new Blob([JSON.stringify({ ...rest })], { type: 'application/json' }));

    return this.api.post('/scrap', request);
  };
  updateScrap = (data: UpdateScrapReqeust) => {
    return this.api.put('/scrap', data);
  };
  deleteScrap = ({ ids }: DeleteScrapRequest) => {
    return this.api.delete(`/scrap/?id=${ids}`);
  };
}

export default new ScrapApi(instance);
