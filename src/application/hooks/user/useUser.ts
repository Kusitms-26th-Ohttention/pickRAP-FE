import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { userAuthState } from '@/application/store/user/userAuth';
import { userInfoState } from '@/application/store/user/userInfo';
import { api, getAccessToken, removeAccessToken, setAccessToken } from '@/infra/api';

/**
 * 1. 유저의 로그인 여부 반환
 * 2. 유저 로그인/로그아웃 함수 반환
 * 3. 유저 정보 반환
 */
export const useUser = () => {
  const [auth, setAuth] = useRecoilState(userAuthState);
  const [info, setInfo] = useRecoilState(userInfoState);
  const router = useRouter();

  const handleInfo = async () => {
    /**
     * const {data:info} = await api.user.getUserInfo()
     * setInfo(info)
     */
  };

  if (getAccessToken() && !auth.isLogin) {
    setAuth({ isLogin: true });
    handleInfo();
  }

  const login = useCallback(async () => {
    const { data } = await api.auth.login();
    setAccessToken(data.token);

    await handleInfo();

    setAuth({ isLogin: true });
  }, [setAuth]);

  const logout = useCallback(async () => {
    await api.auth.logout();
    removeAccessToken();

    setAuth({ isLogin: false });
    setInfo(null);
    router.push('/');
  }, [router, setAuth, setInfo]);

  return { isLogin: auth.isLogin, userInfo: info, login, logout };
};
