import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useInput } from '@/application/hooks/common/useInput';
import { ActiveButton } from '@/components/common/Button';
import { InputBase, InputLabel } from '@/components/common/Input';
import withNavigation from '@/containers/HOC/withNavigation';

const Profile: NextPage = () => {
  const [name, setName] = useInput({ maxLength: 10 });
  const [description, setDescription] = useInput({ maxLength: 100 });
  const router = useRouter();

  return (
    <>
      <div
        css={css`
          height: 60%;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        `}
      >
        <div
          css={css`
            margin-top: 24px;
          `}
        />
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
            margin-top: 24px;
          `}
        >
          <InputLabel>유저 이름</InputLabel>
          <InputBase rightPlaceholder={`${name.length}/10`} value={name} onChange={(e) => setName(e.target.value)} />
          <div
            css={css`
              margin-top: 24px;
            `}
          />

          <InputLabel>유저 소개글</InputLabel>
          <InputBase
            rightPlaceholder={`${description.length}/100`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          height: 52px;
          position: absolute;
          bottom: 0;
        `}
      >
        <ActiveButton
          active
          onClick={() => {
            // TODO profile name description update
            router.push('/scrap');
          }}
        >
          완료
        </ActiveButton>
      </div>
    </>
  );
};

export default withNavigation(Profile, {
  TopNav: { title: '나의 프로필', backUrl: '/auth/complete', isMiddle: true },
  noBottom: true,
});
