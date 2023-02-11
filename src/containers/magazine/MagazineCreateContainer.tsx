import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import { useMagazineCheckTitle } from '@/application/hooks/api/magazine';
import useModal from '@/application/hooks/common/useModal';
import useToast from '@/application/hooks/common/useToast';
import { useMagazineInfo, useSetMagazineInfo } from '@/application/store/magazine/hook';
import { ERR_MESSAGE } from '@/application/utils/constant';
import InputModal from '@/components/common/Modal/Input';
import Switch from '@/components/common/Switch';
import PageList from '@/components/magazine/PageList';

interface Props {
  thumbnails: MagazineThumbnail[];
  selectItem?: boolean;
}
const MagazineCreateContainer = ({ thumbnails, selectItem }: Props) => {
  const { show: modal } = useModal();
  const magazineInfo = useMagazineInfo();
  const setMagazineInfo = useSetMagazineInfo();
  const { close } = useToast();
  const mutation = useMagazineCheckTitle();

  const handleTitle = () => {
    modal(
      <InputModal
        title={'제목 수정'}
        defaultValue={magazineInfo.title}
        errMsg={ERR_MESSAGE.DUPLICATED_TITLE}
        onSubmit={(value, errorFn) => {
          mutation.mutate(value, {
            onSuccess: ({ data }) => {
              if (data.data) errorFn(true);
              else {
                setMagazineInfo({ title: value });
                close();
              }
            },
          });
        }}
      />,
    );
  };

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-top: 26px;
          margin-bottom: 12px;
        `}
      >
        <span
          css={(theme) =>
            css`
              ${theme.font.B_POINT_20};
              line-height: 160%;
              color: ${theme.color.black02};

              display: flex;
              align-items: center;
            `
          }
        >
          {magazineInfo.title}
          <button
            onClick={handleTitle}
            css={css`
              margin-left: 6px;
              width: 22px;
              height: 22px;
              position: relative;
            `}
          >
            <Image src={'/icon/edit.svg'} layout={'fill'} objectFit={'cover'} alt="편집아이콘" />
          </button>
        </span>
        <span
          css={(theme) =>
            css`
              ${theme.font.R_BODY_12} color: ${theme.color.gray04};
              letter-spacing: 0.005em;
              display: flex;
              align-items: center;
              gap: 8px;
            `
          }
        >
          비공개
          <Switch defaultChecked={!magazineInfo.open_status} onClick={(p) => setMagazineInfo({ open_status: !p })} />
        </span>
      </div>
      <PageList pages={thumbnails} selectItem={selectItem} />
    </>
  );
};

export default MagazineCreateContainer;
