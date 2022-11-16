import { css } from '@emotion/react';
import Image from 'next/image';

const UploadButton = () => {
  return (
    <button
      css={(theme) => css`
        background: #ffffff;
        border: 1px solid ${theme.color.gray08};
        box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.1);
        border-radius: 23px;
        width: 91px;
        display: flex;
        padding: 12px 18px;
        justify-content: space-between;
        align-items: center;
        ${theme.font.R_BODY_13};
        line-height: 1;
      `}
    >
      <Image src={'/icon/plus.svg'} width={14} height={14} />
      업로드
    </button>
  );
};

export default UploadButton;
