import { css } from '@emotion/react';

// 우선 목업데이터로 매거진 띄우기
// import { getSrcByType } from '@/application/utils/helper';
import { SEARCH_MAGAZINE } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';

const RecommendPhotoListContainer = () => {
  return (
    <div
      css={css`
        position: relative;
        height: 100%;
        overflow-y: hidden;
      `}
    >
      <div
        css={css`
          position: absolute;
          overflow: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding-bottom: 26px;
        `}
      >
        <div css={CSSPhotoListContainer}>
          {SEARCH_MAGAZINE.map((magazine) => (
            <div key={magazine.title}>
              <Photo
                custom={css`
                  width: 100%;
                  height: 202px;
                `}
              />
              <p
                css={(theme) => css`
                  width: 100%;
                  padding: 8px 8px 8px 0;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  ${theme.font.M_BODY_15};
                  color: ${theme.color.gray02};
                `}
              >
                {magazine.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CSSPhotoListContainer = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 9px;
`;

export default RecommendPhotoListContainer;
