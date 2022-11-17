import { css } from '@emotion/react';
import { ThreeDots } from 'react-loader-spinner';

const ThreeDotsSpinner = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <ThreeDots width={50} height={50} color="#fade44" ariaLabel="three-dots-loading" />
    </div>
  );
};

export default ThreeDotsSpinner;
