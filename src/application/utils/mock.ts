export const MAGAZINE_THUMBNAILS = [0, 0, 0, 0].map(() => ({
  cover_url: '/picture/mock.png',
  title: '나의 진로 계획',
  magazine_id: 0,
  type: 'thumbnail' as const,
}));

export const PROFILE = {
  src: '',
  name: '익명',
  date: '2022.11.26',
  description: '진정한 나의 모습을 담은 나만의 바이블',
  hashtags: ['#뉴비', '#자료모음', '#패션피플'],
};

export const MEMO = `사람에게는 저마다의 바다가  있고 사람에게는 저마다의 파도가 있기 마련이지. 우리는 한낱 사람이라서 일렁였고 고작 사람이기 때문에 글썽일 수밖에는 없었던 거야. 우리는 서로 모든 이들에게 타인이기 때문에 내리는 비에 옷깃을 젖어야 했으며 그마저도 사람이기 때문에 그 빗속을 외로이 걸을 수 밖에 없었던 거야.

 무릇, 모든 별들도 시간의 흐름에 따라 조금씩 변해가기 마련이거늘, 하물며 시간의 연장선에서 사람이라는 존재가 할 수 있는 일은 기껏 해봐야 남들처럼 사는 일이거나 남들처럼 살지 않는 일에 지나지 않아.`;

export const PAGES = [0, 0, 0, 0].map(() => ({
  contents: MEMO,
  file_url: '/picture/mock.png',
  preview_url: '/preview/mock.png',
  page_id: 0,
  text: MEMO,
  type: 'page' as const,
}));

export const MAGAZINE = {
  created_date: '2022-11-21T19:02:48.608Z',
  magazine_id: 0,
  open_status: false,
  page_list: PAGES,
  title: '나는 더미 데이터',
};

export const SCRAPS = [0, 0, 0, 0, 0, 0].map(() => ({
  category: '테스트 카테고리',
  content: '테스트 콘텐츠',
  create_time: new Date().toISOString(),
  file_url: '/picture/mock.png',
  hashtags: ['#포폴용도', '#자료모음', '#패션피플'],
  id: 0,
  memo: '메모메모',
  scrap_type: 'image',
  title: '타이틀',
  url_preview: '',
}));
export const EDIT_PAGE = [0, 0, 0, 0, 0].map(() => ({ scrap_id: 0, text: '', src: '/picture/mock.png' }));
