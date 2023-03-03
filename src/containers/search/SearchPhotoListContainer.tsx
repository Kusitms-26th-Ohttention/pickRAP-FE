import { css } from '@emotion/react';

// import { getSrcByType } from '@/application/utils/helper';
import { SEARCH_MAGAZINE } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';
import RoundPhoto from '@/components/common/Photo/RoundPhoto';

const SearchPhotoListContainer = () => {
  // TODO API 연결 후 작업할 것들
  // const router = useRouter();
  // const ref = useIntersectionObserver({ callback: onEndReached });

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
            <div key={magazine.user}>
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
                  ${theme.font.M_BODY_12};
                  color: ${theme.color.gray03};
                `}
              >
                {magazine.title}
              </p>
              <div
                css={css`
                  display: flex;
                  margin-bottom: 8px;
                `}
              >
                <RoundPhoto width={'13px'} height={'13px'} src={''} />
                <p
                  css={(theme) => css`
                    margin-left: 4px;
                    ${theme.font.R_BODY_11}
                    color: ${theme.color.gray06};
                  `}
                >
                  {magazine.user}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <span ref={ref} /> */}
      </div>
    </div>
  );
};

const CSSPhotoListContainer = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 9px;
`;

export default SearchPhotoListContainer;
