import { css } from '@emotion/react';
import Image from 'next/image';

import { DOMAIN } from '@/application/utils/constant';
import { ButtonBase } from '@/components/common/Button';

const getKakaoUrl = (next: string) =>
  `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${DOMAIN}/auth/kakao/callback?nextUrl=${next}&response_type=code`;
const getNaverUrl = (next: string) =>
  `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_ID}&redirect_uri=${DOMAIN}/auth/naver/callback?nextUrl=${next}&state=STATE_STRING`;

interface Props {
  nextUrl?: string;
}
export const KakaoButton = ({ nextUrl = '/auth/complete' }: Props) => {
  return (
    <ButtonBase
      onClick={() => (window.location.href = getKakaoUrl(nextUrl))}
      custom={css`
        background: #f9e007;
        border: none;
        padding: 14px 0;
      `}
    >
      <Image src="/letter/kakao.svg" alt="kakao" width={162} height={20} />
    </ButtonBase>
  );
};
export const NaverButton = ({ nextUrl = '/auth/complete' }: Props) => {
  return (
    <ButtonBase
      onClick={() => (window.location.href = getNaverUrl(nextUrl))}
      custom={css`
        background: #2fb403;
        border: none;
        padding: 14px 0;
      `}
    >
      <Image src="/letter/naver.svg" alt="naver" width={130} height={20} />
    </ButtonBase>
  );
};
