export type GetScrapDetailResponse = Scrap;

export interface GetScrapBySearchRequest {
  search: string;
  pageParam?: number;
}

export interface GetScrapByTypeRequest {
  filter: ScrapType;
  pageParam?: number;
}

export interface GetScrapsResponse {
  nextScrapId: number;
  scrapResponses: {
    content: Scrap[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElement: number;
    pageable: {
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      unpaged: boolean;
    };
    size: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
  };
}

export interface SaveScrapRequest {
  file: File;
  category_id: number;
  content: string;
  hashtags: string[];
  memo: string;
  scrap_type: ScrapType;
  title: string;
}

export interface UpdateScrapReqeust {
  hashtags: string[];
  id: number;
  memo: string;
  title: string;
}

export interface DeleteScrapRequest {
  id: number;
}
export type GetScrapDetailRequest = DeleteScrapRequest;
