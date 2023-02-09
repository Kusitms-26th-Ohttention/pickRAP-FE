export type GetAnalysisDetailResponse = Analysis;

export interface GetTagAnalysisForYear {
  year: number;
}

export interface GetTagAnalysisForYearMonth extends GetTagAnalysisForYear {
  month: number;
}

export type GetRevisitAnalysisResponse = RevisitAnalysis[];
