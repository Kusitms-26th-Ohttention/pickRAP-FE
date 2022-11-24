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
export type GetMagazineDetailResponse = Magazine;

export type UpdateMagazineRequest = SaveMagazineRequest & { id: number };

export interface DeletePageRequest {
  ids: number[];
}
export type DeleteMagazineRequest = DeletePageRequest;
