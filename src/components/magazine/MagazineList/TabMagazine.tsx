import { css } from '@emotion/react';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';

import type { UseScrollDetectOption } from '@/application/hooks/utils/useScrollDetect';
import useScrollDetect from '@/application/hooks/utils/useScrollDetect';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';
import NoMagazine from '@/components/magazine/NoMagazine';

interface TabMagazineProps {
  magazines: MagazineThumbnail[];
  selectItem?: boolean;
  deleteOption?: boolean;
  onScrollDown?: UseScrollDetectOption['onScroll'];
}

const TabMagazine = ({ magazines, selectItem, deleteOption, onScrollDown }: TabMagazineProps) => {
  const ref = useScrollDetect<HTMLDivElement>({ onScroll: onScrollDown });
  const boolOption = deleteOption;

  // TODO 테스트 후 recoil로 수정 => 취소 눌렀을 때 빈 배열이 될 수 있도록 만들어야 함 (현재는 취소후에도 그대로 id값이 남아있음)
  // 썸네일 클릭 시 각 썸네일 별 true일 때만 ids 담기, false일 시 filter를 이용해 다시 제외
  // selected 조건문 제대로 동작안함. 수정하기
  const [magazineItems, setMagazineItems] = useState<Array<number>>([]);
  const magazineRef = useRef<HTMLDivElement | null>(null);
  const selectMagazineItems = useCallback(
    (selected: boolean, id: number) => {
      selected ? setMagazineItems((prev) => [...prev, id]) : setMagazineItems(magazineItems.filter((el) => el !== id));
    },
    [magazineItems],
  );

  const test = [...magazines];

  console.log(magazineItems);
  console.log(test);

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
                    ref={magazineRef}
                    blur={<PhotoSelect enabled={selectItem} />}
                    src={magazine.cover_url}
                    width={'196px'}
                    height={'255px'}
                    onClick={() => {
                      // selectMagazineItems(ref, magazine.magazine_id);
                    }}
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
