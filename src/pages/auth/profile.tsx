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
      <div
        css={css`
          height: 60%;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        `}>
       <div css={css`margin-top: 24px;`}/>
       <Image
          src={'/icon/profile.svg'}
          width={100}
          height={100}
          onClick={() => {
            // TODO profile image upload
          }}
        />
        <div css={css`margin-top: 24px;`}>
          <InputLabel>유저 이름</InputLabel>
          <InputBase
            rightPlaceholder={`${name.length}/10`}
            value={name}
            onChange={(e) => e.target.value.length <= 10 && setName(e.target.value)}
          />
          <div css={css`margin-top: 24px;`}/>

          <InputLabel>유저 소개글</InputLabel>
          <InputBase
            rightPlaceholder={`${description.length}/100`}
            value={description}
            onChange={(e) => e.target.value.length <= 100 && setDescription(e.target.value)}
          />
        </div>
      </div>
      <div css={css`
        height:30%;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        position: relative;
        margin-bottom: 50px;
      `}>
        <ActiveButton
              active
              onClick={() => {
                //TODO profile name description update
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
  BottomNav: null,
});
