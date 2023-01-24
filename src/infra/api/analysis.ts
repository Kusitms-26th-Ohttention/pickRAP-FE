import { instance } from './instance';
import { GetAnalysisDetailResponse } from './types/analysis';

class AnalysisApi {
  constructor(private api: typeof instance) {}
  getAnalysis = () => {
    // 분석페이지에 들어왔을 시 불러올 api
    return this.api.get<GetAnalysisDetailResponse>('analysis?filter=all');
    // TODO 분석 상세 페이지용 year month api 코드짜기
  };
}

export default new AnalysisApi(instance);
