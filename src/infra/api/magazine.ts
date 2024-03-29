import { instance } from '@/infra/api/instance';
import type {
  DeleteMagazineRequest,
  DeletePageRequest,
  GetMagazineDetailRequest,
  GetMagazineDetailResponse,
  GetMagazinesResponse,
  GetRecommentMagazines,
  SaveMagazineRequest,
  UpdateMagazineRequest,
} from '@/infra/api/types/magazine';

class MagazineApi {
  constructor(private api: typeof instance) {}
  getMagazines = () => {
    return this.api.get<GetMagazinesResponse>('/magazine');
  };
  getRecommendMagazines = () => {
    return this.api.get<GetRecommentMagazines>('/magazine/recommend');
  };
  saveMagazine = (args: SaveMagazineRequest) => {
    return this.api.post(`/magazine`, args);
  };
  deleteMagazines = ({ ids }: DeleteMagazineRequest) => {
    return this.api.delete(`/magazine?ids=${ids}`);
  };
  getMagazineDetail = ({ id }: GetMagazineDetailRequest) => {
    return this.api.get<GetMagazineDetailResponse>(`/magazine/${id}`);
  };
  updateMagazine = ({ id, ...rest }: UpdateMagazineRequest) => {
    return this.api.put(`/magazine/${id}`, rest);
  };
  deletePages = ({ ids }: DeletePageRequest) => {
    return this.api.delete(`/magazine/page?ids=${ids}`);
  };
  checkTitle = (title: string) => {
    return this.api.get<boolean>(`/magazine/check-exist-title/${title}`);
  };
}

export default new MagazineApi(instance);
