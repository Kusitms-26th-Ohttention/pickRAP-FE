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
  selectDeleteOption?: boolean;
  onScrollDown?: UseScrollDetectOption['onScroll'];
}

const TabMagazine = ({ magazines, selectItem, selectDeleteOption, onScrollDown }: TabMagazineProps) => {
  const ref = useScrollDetect<HTMLDivElement>({ onScroll: onScrollDown });
  const multiSelectOn = selectDeleteOption;

  // 썸네일 클릭 시 해당 id 추가, 선택 취소 시 id 확인 후 제거
  const [magazineItems, setMagazineItems] = useRecoilState(magazineIdsArray);

  const selectMagazineItems = useCallback(
    (id: number) => {
      magazineItems.includes(id)
        ? setMagazineItems(magazineItems.filter((el) => el !== id))
        : setMagazineItems((prev) => [...prev, id]);
    },
    // TODO 해당 경고 고민해보고 수정하기
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [magazineItems],
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
