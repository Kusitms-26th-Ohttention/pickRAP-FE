export interface GetScrapDetailResponse {
  category: string;
  content: string;
  create_time: string;
  file_url: string;
  hashtags: string[];
  id: number;
  memo: string;
  scrap_type: 'IMAGE' | 'todo';
  title: string;
}
type ScrapContent = GetScrapDetailResponse;

export interface GetScrapsResponse {
  content: ScrapContent[];
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
}

export interface SaveScrapRequest {
  file: FormData;
  category_id: number;
  hashtags: { tag: string }[];
  memo: string;
  scrap_type: 'IMAGE' | 'VIDEO' | 'PDF' | 'TEXT' | 'LINK';
  title: string;
}

export interface ModifyScrapRequest {
  hashtags: { tag: string }[];
  id: number;
  memo: string;
  title: string;
}

export interface DeleteScrapRequest {
  id: number[];
}
export type GetScrapDetailRequest = DeleteScrapRequest;
