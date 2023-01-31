export type GetAnalysisDetailResponse = Analysis | any;

export interface GetTagAnalysisForYear {
  year: number;
}

export interface GetTagAnalysisForYearMonth extends GetTagAnalysisForYear {
  month: number;
}
