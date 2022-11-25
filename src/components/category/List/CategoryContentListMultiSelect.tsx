import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

import { useGetContentByCategory } from '@/application/hooks/api/category';
import useToast from '@/application/hooks/common/useToast';
import useIntersectionObserver from '@/application/hooks/utils/useIntersectionObserver';
import { getSrcByType } from '@/application/utils/helper';
import SelectCategoryWithContent from '@/components/category/Select/SelectCategoryWithContent';
import { ActiveButton } from '@/components/common/Button';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface Props extends Partial<Category> {
  onSubmit: (pickContents: EditPage[]) => void;
}
const CategoryContentListMultiSelect = ({ name, id = 0, onSubmit }: Props) => {
  const { categories: scraps, fetchNextPage } = useGetContentByCategory({ id });

  const pickSet = useRef(new Set<EditPage>());
  const ref = useIntersectionObserver({ callback: fetchNextPage });
  const { replace } = useToast();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        pickSet.current.size && onSubmit?.(Array.from(pickSet.current));
      }}
    >
      <span
        onClick={() => replace({ content: <SelectCategoryWithContent multiSelect onSubmit={onSubmit} /> })}
        css={(theme) =>
          css`
            display: flex;
            width: fit-content;
            gap: 9px;
            align-items: flex-start;
            vertical-align: middle;
            ${theme.font.B_POINT_17};
            color: ${theme.color.black02};
            line-height: 110%;
            margin-bottom: 28px;
          `
        }
      >
        <Image src={'/icon/backArrow.svg'} width={10} height={17} />
        {name}
      </span>
      <div
        css={css`
          overflow-y: scroll;
          max-height: 75vh;
          position: relative;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, minmax(60px, 1fr));
            gap: 10px;
            padding-bottom: 10px;
          `}
        >
          {scraps.map((scrap) => (
            <Photo
              custom={css`
                aspect-ratio: 1/1;
              `}
              onClick={() =>
                pickSet.current.add({
                  scrap_id: scrap.id,
                  src: getSrcByType(scrap),
                  text: '',
                  placeholder: scrap.content,
                })
              }
              key={scrap.id}
              blur={<PhotoSelect enabled />}
              src={getSrcByType(scrap)}
              text={scrap.content}
            />
          ))}
          <span ref={ref} />
        </div>
      </div>

      <ActiveButton active>다음 </ActiveButton>
    </form>
  );
};

export default CategoryContentListMultiSelect;
