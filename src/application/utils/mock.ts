export const MOCK_GET_CATEGORIES: Category[] = new Array(6).fill(0).map(() => ({
  content: 'mock content',
  file_url: '/picture/mock.png',
  id: 0,
  name: 'mock name',
  scrapType: 'IMAGE' as const,
}));
