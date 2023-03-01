import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import useModal from '@/application/hooks/common/useModal';
import { useEditPageReset, useEditPageValue } from '@/application/store/edit/hook';
import { useMagazineInfo, useSetMagazineInfo } from '@/application/store/magazine/hook';
import { ActiveButton } from '@/components/common/Button';
import { TopNavigation } from '@/components/common/Navigation';
import PageEditContainer from '@/containers/magazine/PageEditContainer';

/**
 * @desc  구현 사항
 * 1. 새로 고침 또는 페이지 뒤로 가기 클릭 시 confirm 모달
 * 2. 다중 선택 토스트에서 {scrap id, url, text}[], start number dispatch 후 redirect
 * 3. scrap id carousel, start number
 * 4. recoil에 page text 있으면 placeholder, active button 렌더링
 * 5. 텍스트 입력 토스트 완료 시 set state
 * 6. 페이지네이션 버튼, 저장 버튼 누를 시 text recoil dispatch
 * 7. 페이지네이션 버튼 클릭 시, recoil {scrap id, url, text} get by page number
 * 8. 저장 버튼 누를 시 mutation
 */
const UploadPage: NextPage = () => {
  const router = useRouter();
  const { confirm } = useModal();
  const magazineInfo = useMagazineInfo();
  const setMagazineInfo = useSetMagazineInfo();
  const editPages = useEditPageValue();
  const resetEditPages = useEditPageReset();
  const editContainerProps = {
    pages: editPages,
    startPage: magazineInfo.start_number,
  };
  return (
    <>
      <TopNavigation
        onClick={() => {
          confirm('페이지를 나가시겠어요?', {
            onSuccess: () => {
              resetEditPages();
              router.push('/magazine/upload');
            },
            description: '페이지를 나가면, 저장되지 않습니다',
          });
        }}
        custom={css`
          justify-content: flex-start;
          padding-left: 30px;
        `}
      >
        페이지 추가
      </TopNavigation>
      <PageEditContainer {...editContainerProps} />
      <div
        css={css`
          position: absolute;
          width: 100%;
          bottom: -45px;
        `}
      >
        <ActiveButton
          active
          onClick={() => {
            console.debug('final upload state :::', editPages);
            setMagazineInfo((prev) => ({
              ...prev,
              page_list: [...(prev?.page_list || []), ...editPages],
              start_number: prev.start_number! + editPages.length,
            }));
            router.replace('/magazine/upload').then(resetEditPages);
          }}
        >
          저장
        </ActiveButton>
      </div>
    </>
  );
};

export default UploadPage;
