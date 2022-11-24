export type GetMagazinesResponse = Omit<MagazineThumbnail, 'type'>[];

export interface SaveMagazineRequest {
  cover_scrap_id: number;
  open_status: boolean;
  page_list: EditPage[];
  title: string;
}

export interface GetMagazineDetailRequest {
  id: number;
}
export interface GetMagazineDetailResponse extends Omit<Magazine, 'page_list'> {
  page_list: Omit<Page, 'type'>[];
}

export type UpdateMagazineRequest = SaveMagazineRequest & { id: number };

export interface DeletePageRequest {
  ids: number[];
}
export type DeleteMagazineRequest = DeletePageRequest;
