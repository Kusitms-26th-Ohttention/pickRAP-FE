import { instance } from '@/infra/api/instance';
import type {
  GetAnalysisDetailResponse,
  GetRevisitAnalysisResponse,
  GetTagAnalysisForYear,
  GetTagAnalysisForYearMonth,
} from '@/infra/api/types/analysis';

class AnalysisApi {
  constructor(private api: typeof instance) {}
  getAnalysis = () => {
    // 분석페이지에 들어왔을 시 불러올 api
    return this.api.get<GetAnalysisDetailResponse>('/analysis?filter=all');
  };
  getTagAnalysisForYear = ({ year }: GetTagAnalysisForYear) => {
    return this.api.get<GetAnalysisDetailResponse>(`/analysis?filter=year&year=${year}`);
  };
  getTagAnalysisForYearMonth = ({ year, month }: GetTagAnalysisForYearMonth) => {
    return this.api.get<GetAnalysisDetailResponse>(`/analysis?filter=month&year=${year}&month=${month}`);
  };
  getRevisitAnalysis = () => {
    return this.api.get<GetRevisitAnalysisResponse>('/analysis/revisit?filter=all');
  };
}

export default new AnalysisApi(instance);
