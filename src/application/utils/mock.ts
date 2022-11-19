export const MOCK_GET_CATEGORIES: Category[] = new Array(10).fill(0).map(() => ({
  content: 'mock content',
  file_url: '/picture/mock.png',
  id: 0,
  name: 'mock name',
  scrapType: 'IMAGE' as const,
}));

export const PROFILE = {
  src: '/picture/mock.png',
  name: '박지수',
  date: '2022.11.17',
};

export const MEMO = `사람에게는 저마다의 바다가  있고 사람에게는 저마다의 파도가 있기 마련이지. 우리는 한낱 사람이라서 일렁였고 고작 사람이기 때문에 글썽일 수밖에는 없었던 거야. 우리는 서로 모든 이들에게 타인이기 때문에 내리는 비에 옷깃을 젖어야 했으며 그마저도 사람이기 때문에 그 빗속을 외로이 걸을 수 밖에 없었던 거야.

 무릇, 모든 별들도 시간의 흐름에 따라 조금씩 변해가기 마련이거늘, 하물며 시간의 연장선에서 사람이라는 존재가 할 수 있는 일은 기껏 해봐야 남들처럼 사는 일이거나 남들처럼 살지 않는 일에 지나지 않아.`;
