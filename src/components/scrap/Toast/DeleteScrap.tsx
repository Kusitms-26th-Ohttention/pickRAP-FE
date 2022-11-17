import { css } from '@emotion/react';
import Image from 'next/image';

import { ActiveButton } from '@/components/common/Button';

interface DeleteScrapProps {
  onBack?: () => void;
  onDelete?: () => void;
}

const DeleteScrap = ({ onBack, onDelete }: DeleteScrapProps) => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
      `}
    >
      <h2
        css={(theme) => css`
          ${theme.font.B_POINT_18};
          color: ${theme.color.black02};
        `}
      >
        정말로 삭제하시겠습니까?
      </h2>
      <span
        css={css`
          width: 94px;
          height: 99px;
          position: relative;
          margin-bottom: 18px;
        `}
      >
        <Image src={'/picture/question.png'} layout={'fill'} objectFit={'cover'} />
      </span>
      <div
        css={css`
          display: flex;
          width: 100%;
          gap: 10px;
        `}
      >
        <ActiveButton onClick={onBack}>뒤로가기</ActiveButton>
        <ActiveButton active onClick={onDelete}>
          삭제하기
        </ActiveButton>
      </div>
    </section>
  );
};

export default DeleteScrap;
