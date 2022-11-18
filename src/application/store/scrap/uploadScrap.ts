import { atom } from 'recoil';

export interface UploadScrapState {
  file: File;
  category_id: number;
  hashtags: string[];
  memo: string;
  scrap_type: 'IMAGE' | 'VIDEO' | 'PDF' | 'TEXT' | 'LINK';
  title: string;
  content: string;
}

export const uploadScrapState = atom<UploadScrapState>({
  key: 'uploadScrapState',
  default: {} as UploadScrapState,
});
