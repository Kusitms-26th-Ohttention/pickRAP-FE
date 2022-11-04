import { css } from '@emotion/react';
import axios from 'axios';

import { BASE_URL } from '@/application/utils/constant';
import { ButtonBase } from '@/components/common/Button/index';

export const KakaoButton = () => {
  return (
    <ButtonBase
      onClick={() => axios.get(`${BASE_URL}/auth/kakao`)}
      custom={css`
        background: #f9e007;
        border: none;
        border-radius: 4px;
        padding: 14px 0;
      `}
    >
      <img src="/letter/kakao.svg" alt="kakao" width={162} />
    </ButtonBase>
  );
};
export const NaverButton = () => {
  return (
    <ButtonBase
      onClick={() => (window.location.href = `${BASE_URL}/auth/naver`)}
      custom={css`
        background: #2fb403;
        border: none;
        border-radius: 4px;
        padding: 14px 0;
      `}
    >
      <img src="/letter/naver.svg" alt="naver" width={130} />
    </ButtonBase>
  );
};
