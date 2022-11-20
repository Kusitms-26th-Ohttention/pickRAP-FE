import { atom } from 'recoil';

export interface ScarpForm extends Pick<Scrap, 'hashtags' | 'memo' | 'title' | 'content' | 'scrap_type'> {
  file: File;
  category_id: number;
  uploadRequest: (...args: any[]) => any;
}

export const scarpForm = atom<ScarpForm>({
  key: 'uploadScrapState',
  default: {} as ScarpForm,
});
