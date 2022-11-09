import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useInput } from '@/application/hooks/useInput';
import { ActiveButton } from '@/components/common/Button';
import { InputBase, InputLabel } from '@/components/common/Input';
import withNavigation from '@/containers/HOC/withNavigation';

const Profile: NextPage = () => {
  const [name, setName] = useInput();
  const [description, setDescription] = useInput();
  const router = useRouter();

  return (
    <>
      <Image
        src={'/icon/profile.svg'}
        width={100}
        height={100}
        onClick={() => {
          // TODO profile image upload
        }}
      />
      <div
        css={css`
          width: 100%;
          margin-top: 30px;
        `}
      >
        <InputLabel>유저 이름</InputLabel>성{' '}
        <InputBase
          rightPlaceholder={`${name.length}/10`}
          value={name}
          onChange={(e) => e.target.value.length <= 10 && setName(e.target.value)}
        />
        <div
          css={css`
            height: 24px;
          `}
        />
        <InputLabel>유저 소개글</InputLabel>
        <InputBase
          rightPlaceholder={`${description.length}/100`}
          value={description}
          onChange={(e) => e.target.value.length <= 100 && setDescription(e.target.value)}
        />
      </div>
      <ActiveButton
        active
        onClick={() => {
          //TODO profile name description update
          router.push('/scrap');
        }}
      >
        완료
      </ActiveButton>
    </>
  );
};

export default withNavigation({ title: '나의 프로필', backUrl: '/auth/complete', isMiddle: true }, Profile);
