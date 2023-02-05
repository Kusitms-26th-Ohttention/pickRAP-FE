import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { getSrcByType } from '@/application/utils/helper';
import Photo from '@/components/common/Photo';

interface RevisitPhotoListProps {
  thumId: number;
  thum: RevisitAnalysis;
  title?: string;
  onClick?: () => void;
}

const RevisitPhotoList = ({ thumId, thum, title }: RevisitPhotoListProps) => {
  const router = useRouter();

  const handleClickPhoto = (thumId: number) => {
    router.push(`/scrap/${thumId}`);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
      onClick={() => handleClickPhoto(thumId)}
    >
      <Photo
        custom={css`
          aspect-ratio: 1/1;
        `}
        src={getSrcByType(thum)}
      />
      <div
        css={(theme) => css`
          color: ${theme.color.black03};
          ${theme.font.R_BODY_13};
          margin: 6px 0;
        `}
      >
        {title}
      </div>
    </div>
  );
};

export default RevisitPhotoList;
