export const MOCK_GET_CATEGORIES: Category[] = new Array(6)
  .fill(0)
  .map(() => ({
    content: 'mock content',
    file_url: '/picture/mock.png',
    id: 0,
    name: 'mock name',
    scrapType: 'IMAGE' as const,
  }))
  .concat([
    { file_url: '/icon/scrap/defaultCategory.svg', name: '카테고리 미지정' } as Category,
    { file_url: '/icon/scrap/newCategory.svg', name: '새로운 카테고리 생성' } as Category,
  ]);
