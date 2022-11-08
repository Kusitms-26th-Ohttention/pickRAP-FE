import type { NextPage } from 'next';
import Image from 'next/image';

import { ActiveButton } from '@/components/common/Button';

const Complete: NextPage = () => {
  return (
    <div>
      <Image src={'/picture/signup.svg'} width={237} height={199} />
      <ActiveButton active>프로필 설정하기</ActiveButton>
      <ActiveButton>건너뛰기</ActiveButton>
    </div>
  );
};

export default Complete;
