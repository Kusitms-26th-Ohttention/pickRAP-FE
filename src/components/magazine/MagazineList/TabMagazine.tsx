import { css } from '@emotion/react';
import Link from 'next/link';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import type { UseScrollDetectOption } from '@/application/hooks/utils/useScrollDetect';
import useScrollDetect from '@/application/hooks/utils/useScrollDetect';
import { magazineIdsArray } from '@/application/store/magazine/state';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';
import NoMagazine from '@/components/magazine/NoMagazine';

interface TabMagazineProps {
  magazines: MagazineThumbnail[];
  selectItem?: boolean;
  option?: boolean;
  onScrollDown?: UseScrollDetectOption['onScroll'];
}

const TabMagazine = ({ magazines, selectItem, option, onScrollDown }: TabMagazineProps) => {
  const ref = useScrollDetect<HTMLDivElement>({ onScroll: onScrollDown });
  const boolOption = option;

  // 썸네일 클릭 시 각 썸네일 별 true일 때만 ids 담기, false일 시 filter를 이용해 다시 제외
  // selected 조건문 제대로 동작안함. 수정하기
  const [magazineItems, setMagazineItems] = useRecoilState(magazineIdsArray);
  // const magazineRef = useRef<HTMLDivElement | null>(null);

  const selectMagazineItems = useCallback(
    (selected: any, id: number) => {
      selected ? setMagazineItems((prev) => [...prev, id]) : setMagazineItems(magazineItems.filter((el) => el !== id));
    },
    [magazineItems],
  );

  console.log(magazineItems);

  return (
    <div
      css={css`
        height: 100%;
        overflow: hidden;
        position: relative;
      `}
    >
      <div
        ref={ref}
        css={css`
          background: white;

          position: absolute;
          overflow: auto;
          top: 0;
          padding: 26px 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 100%;
          `}
        >
          {magazines.map((magazine, idx) => (
            <article
              key={magazine.cover_url}
              css={
                idx % 2 &&
                css`
                  align-self: flex-end;
                `
              }
            >
              {boolOption ? (
                <div>
                  <Photo
                    blur={<PhotoSelect enabled={selectItem} />}
                    src={magazine.cover_url}
                    width={'196px'}
                    height={'255px'}
                    onClick={() => selectMagazineItems(ref, magazine.magazine_id)}
                  />
                </div>
              ) : (
                <Link href={`/magazine/${magazine.magazine_id}`}>
                  <Photo
                    blur={<PhotoSelect enabled={selectItem} />}
                    src={magazine.cover_url}
                    width={'196px'}
                    height={'255px'}
                  />
                </Link>
              )}
              <span
                css={(theme) =>
                  css`
                    margin-top: 8px;
                    ${theme.font.M_BODY_18};
                    color: ${theme.color.black01};
                    vertical-align: middle;
                    line-height: 160%;
                  `
                }
              >
                {magazine.title}
              </span>
            </article>
          ))}
          {magazines.length === 0 && (
            <>
              <span />
              <NoMagazine />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabMagazine;
