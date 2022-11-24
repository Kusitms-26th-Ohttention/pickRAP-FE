import { css } from '@emotion/react';

import { ActiveButton } from '@/components/common/Button';

interface ConfirmProps {
  title: string;
  onReject?: () => void;
  onSuccess?: () => void;
  description?: string;
}
const Confirm = ({ title, onReject, onSuccess, description }: ConfirmProps) => {
  return (
    <div
      css={css`
        padding: 32px 38px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <span
        css={(theme) =>
          css`
            ${theme.font.B_POINT_17};
            color: ${theme.color.black02};
            line-height: 160%;
          `
        }
      >
        {title}
      </span>
      {description ? (
        <span
          css={(theme) =>
            css`
              margin-top: 4px;
              ${theme.font.R_BODY_13};
              line-height: 160%;
              color: ${theme.color.gray07};
            `
          }
        >
          {description}
        </span>
      ) : null}
      <div
        css={css`
          margin-top: 38px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 24px;
        `}
      >
        <ActiveButton
          onClick={onReject}
          custom={css`
            width: 88px;
            display: inline-block;
            height: 40px;
            padding: 0;
          `}
        >
          아니오
        </ActiveButton>
        <ActiveButton
          active
          onClick={onSuccess}
          custom={css`
            width: 88px;
            display: inline-block;
            height: 40px;
            padding: 0;
          `}
        >
          예
        </ActiveButton>
      </div>
    </div>
  );
};

export default Confirm;
