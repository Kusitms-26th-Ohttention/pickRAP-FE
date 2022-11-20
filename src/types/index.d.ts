type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

interface APIResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

type ScrapType = 'image' | 'text' | 'link' | 'video' | 'pdf';

interface Category {
  content: string;
  file_url: string;
  id: number;
  name: string;
  scrapType: ScrapType;
}

interface Scrap {
  category: string;
  content: string;
  create_time: string;
  file_url: string;
  hashtags: string[];
  id: number;
  memo: string;
  scrap_type: ScrapType;
  title: string;
  url_preview: string;
}
