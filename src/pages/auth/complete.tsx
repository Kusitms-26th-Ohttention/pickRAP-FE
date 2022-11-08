import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ActiveButton } from '@/components/common/Button';

const Complete: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Image src={'/picture/signup.svg'} width={237} height={199} />
      <ActiveButton active onClick={() => router.push('/auth/profile')}>
        프로필 설정하기
      </ActiveButton>
      <ActiveButton onClick={() => router.push('/scrap')}>건너뛰기</ActiveButton>
    </>
  );
};

export default Complete;
