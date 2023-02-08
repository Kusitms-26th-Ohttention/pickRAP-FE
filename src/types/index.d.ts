type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

interface APIResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

type ScrapType = 'image' | 'text' | 'link' | 'video' | 'pdf';

// TODO Domain layer 로 전역 타입 이동
interface Category {
  content: string;
  file_url: string;
  preview_url: string;
  id: number;
  name: string;
  scrap_type: ScrapType;
}

interface Scrap {
  category: string;
  content: string;
  created_time: string;
  file_url: string;
  hashtags: string[];
  id: number;
  memo: string;
  scrap_type: ScrapType;
  title: string;
  preview_url: string;
}

interface Page {
  contents: string;
  file_url: string;
  page_id: number;
  text: string;
}

interface MagazineThumbnail {
  cover_url: string;
  title: string;
  magazine_id: number;
  scrap_id?: number;
  placeholder?: string;
}

interface Magazine {
  created_date: string;
  magazine_id: number;
  open_status: boolean;
  title: string;
  page_list: Page[];
}

interface EditPage {
  scrap_id: number;
  text: string;
  src: string;
  placeholder?: string;
}

interface HashTagAnalysis {
  hashtag_name: string;
  hashtag_rate: number;
  hashtag_count: number;
}

interface TextAnalysis {
  text_word: string;
  text_rate: number;
  text_count: number;
}

interface PersonalMoodAnalysis {
  color_style: string;
  rate: number;
}

interface Analysis {
  hashtags: HashTagAnalysis[];
  texts: TextAnalysis[];
  personal_mood_results: PersonalMoodAnalysis[];
}

interface RevisitAnalysis {
  content: string;
  scrap_id: number;
  scrap_type: string;
  title: string;
  preview_url: string;
  file_url: string;
}
