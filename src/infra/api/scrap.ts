import { instance } from '@/infra/api/instance';
import type {
  DeleteScrapRequest,
  GetScrapDetailRequest,
  GetScrapDetailResponse,
  GetScrapsResponse,
  ModifyScrapRequest,
  SaveScrapRequest,
} from '@/infra/api/types/scrap';

class ScrapApi {
  constructor(private api: typeof instance) {}
  // TODO api가 너무 어렵다.. 수정될듯
  getScrapsAll = () => {
    return this.api.get<GetScrapsResponse>('/scrap/all');
  };
  getScrapDetail = ({ id }: GetScrapDetailRequest) => {
    return this.api.get<GetScrapDetailResponse>(`/scrap/?id=${id}`);
  };
  saveScrap = (data: SaveScrapRequest) => {
    return this.api.post('/scrap', data);
  };
  modifyScrap = (data: ModifyScrapRequest) => {
    return this.api.put('/scrap', data);
  };
  deleteScrap = ({ id }: DeleteScrapRequest) => {
    return this.api.delete(`/scrap/?id=${id}`);
  };
  searchScrap = () => {
    return this.api.get('/scrap/reissue');
  };
}

export default new ScrapApi(instance);
