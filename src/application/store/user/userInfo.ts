import { atom } from 'recoil';

const initUserInfoState = {
  nickname: 'pickRAP',
  description: 'Hello',
  photoUrl: 'https://cdn...',
};

export const userInfoState = atom<typeof initUserInfoState | null>({
  key: 'userInfoState',
  default: initUserInfoState,
});
