import { atom } from 'recoil';

const initUserAuth = {
  isLogin: false,
};

export const userAuthState = atom<typeof initUserAuth>({ key: 'userAuthState', default: initUserAuth });
