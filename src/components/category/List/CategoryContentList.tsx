import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useState } from 'react';

import { useGetContentByCategory } from '@/application/hooks/api/category';
import useToast from '@/application/hooks/common/useToast';
import useIntersectionObserver from '@/application/hooks/utils/useIntersectionObserver';
import { getSrcByType } from '@/application/utils/helper';
import SelectCategoryWithContent from '@/components/category/Select/SelectCategoryWithContent';
import { ActiveButton } from '@/components/common/Button';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface Props extends Partial<Category> {
  onSubmit: (pickContents: EditPage) => void;
}
const CategoryContentList = ({ name, id = 0, onSubmit }: Props) => {
  const { categories: scraps, fetchNextPage } = useGetContentByCategory({ id });
  const [pickContent, setPickContent] = useState<EditPage | null>(null);
  const ref = useIntersectionObserver({ callback: fetchNextPage });
  const { replace } = useToast();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        pickContent && onSubmit?.(pickContent);
      }}
    >
      <span
        onClick={() => replace({ content: <SelectCategoryWithContent onSubmit={onSubmit} /> })}
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
                setPickContent({ scrap_id: scrap.id, src: getSrcByType(scrap), text: '', placeholder: scrap.content })
              }
              key={scrap.id}
              blur={<PhotoSelect enabled value={scrap.id === pickContent?.scrap_id} />}
              src={getSrcByType(scrap)}
              text={scrap.content}
            />
          ))}
          <span ref={ref} />
        </div>
      </div>

      <ActiveButton active>표지 이미지로 설정하기</ActiveButton>
    </form>
  );
};

export default CategoryContentList;
