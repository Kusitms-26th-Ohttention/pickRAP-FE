import { css } from '@emotion/react';

import { ActiveButton } from '@/components/common/Button';

interface CreateScrapProps {
  onClose?: () => void;
}

const CreateScrap = ({ onClose }: CreateScrapProps) => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
      `}
    >
      <span
        css={(theme) =>
          css`
            ${theme.font.B_POINT_16};
            color: ${theme.color.black02};
          `
        }
      >
        생성하기
      </span>
      <ul
        css={(theme) => css`
          display: flex;
          flex-direction: column;
          gap: 16.5px;
          color: ${theme.color.gray03};
          ${theme.font.M_BODY_14};
          line-height: 160%;
          margin-bottom: 20px;
        `}
      >
        <li>내 디바이스에서 파일 업로드</li>
        <li>링크 업로드</li>
        <li>텍스트 업로드</li>
        <li>카테고리 추가</li>
      </ul>
      <ActiveButton active onClick={onClose}>
        닫기
      </ActiveButton>
    </section>
  );
};

export default CreateScrap;
