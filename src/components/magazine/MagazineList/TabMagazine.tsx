import { css } from '@emotion/react';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import type { UseScrollDetectOption } from '@/application/hooks/utils/useScrollDetect';
import useScrollDetect from '@/application/hooks/utils/useScrollDetect';
import { magazineCoverId, magazineIdsArray } from '@/application/store/magazine/state';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';
import NoMagazine from '@/components/magazine/NoMagazine';

interface TabMagazineProps {
  magazines: MagazineThumbnail[];
  selectItem?: boolean;
  selectDeleteBtn?: boolean;
  onScrollDown?: UseScrollDetectOption['onScroll'];
}

const TabMagazine = ({ magazines, selectItem, selectDeleteBtn, onScrollDown }: TabMagazineProps) => {
  const ref = useScrollDetect<HTMLDivElement>({ onScroll: onScrollDown });
  const multiSelectOn = selectDeleteBtn;

  const magazineCover = useSetRecoilState(magazineCoverId);

  // 썸네일 클릭 시 해당 id 추가, 선택 취소 시 id 확인 후 제거
  const setMagazineItems = useSetRecoilState(magazineIdsArray);
  const pickSet = useRef(new Set<number>());

  const selectMagazineItems = useCallback(
    (id: number) => {
      pickSet.current.has(id) ? pickSet.current.delete(id) : pickSet.current.add(id);
      setMagazineItems(Array.from(pickSet.current));
    },
    [pickSet, setMagazineItems],
  );

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
              {multiSelectOn ? (
                <div>
                  <Photo
                    blur={<PhotoSelect enabled={selectItem} />}
                    src={magazine.cover_url}
                    width={'196px'}
                    height={'255px'}
                    onClick={() => selectMagazineItems(magazine.magazine_id)}
                  />
                </div>
              ) : (
                <div onClick={() => magazineCover(magazine.cover_url)}>
                  <Link href={`/magazine/${magazine.magazine_id}`}>
                    <Photo
                      blur={<PhotoSelect enabled={selectItem} />}
                      src={magazine.cover_url}
                      width={'196px'}
                      height={'255px'}
                    />
                  </Link>
                </div>
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
