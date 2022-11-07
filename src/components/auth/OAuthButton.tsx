import { css } from '@emotion/react';
import Image from 'next/image';

import { DOMAIN } from '@/application/utils/constant';
import { ButtonBase } from '@/components/common/Button';

const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${DOMAIN}/auth/kakao/callback&response_type=code`;
const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_ID}&redirect_uri=${DOMAIN}/auth/naver/callback&state=STATE_STRING`;
export const KakaoButton = () => {
  return (
    <ButtonBase
      onClick={() => (window.location.href = KAKAO_URL)}
      custom={css`
        background: #f9e007;
        border: none;
        border-radius: 4px;
        padding: 14px 0;
      `}
    >
      <Image src="/letter/kakao.svg" alt="kakao" width={162} height={20} />
    </ButtonBase>
  );
};
export const NaverButton = () => {
  return (
    <ButtonBase
      onClick={() => (window.location.href = NAVER_URL)}
      custom={css`
        background: #2fb403;
        border: none;
        border-radius: 4px;
        padding: 14px 0;
      `}
    >
      <Image src="/letter/naver.svg" alt="naver" width={130} height={20} />
    </ButtonBase>
  );
};
