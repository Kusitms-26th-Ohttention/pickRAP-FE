import type { NextPage } from 'next';

import { useMagazineInfo } from '@/application/store/magazine/hook';
import withNavigation from '@/containers/HOC/withNavigation';
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
  const [magazineInfo] = useMagazineInfo();
  return (
    <>
      <PageEditContainer pages={magazineInfo.page_list} startPage={magazineInfo.start_number} />
    </>
  );
};

export default withNavigation(UploadPage, {
  TopNav: { title: '페이지 추가', backUrl: '/magazine/upload' },
  noBottom: true,
});
