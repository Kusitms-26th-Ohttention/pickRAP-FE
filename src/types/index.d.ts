type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
interface Category {
  content: string;
  file_url: string;
  id: number;
  name: string;
  scrapType: 'IMAGE';
}
