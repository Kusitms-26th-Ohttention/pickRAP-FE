import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import useMount from '@/application/hooks/useMount';
import Manager from '@/components/common/Toast/Manager';

/**
 * 인터페이스
 * 1. Toast.show
 * 2. Toast.replace
 * 3. Toast.close
 *
 * 요구사항
 * - 특정 조건 시 토스트 오픈
 * - 토스트 컨텐츠 변경
 * - 완료 버튼 클릭시 토스트 닫힘
 *
 * - 백드랍 클릭시 토스트 닫힘 (옵션)
 * - 일정 시간 지날 시 토스트 닫힘 (옵션)
 * - 닫히는 애니메이션 (옵션1. 아래로 스크롤, 옵션2. 투명도 흐리게)
 *
 * 모듈
 * 1. Portal : portal 생성, 하위 컴포넌트 렌더링 (Manager -> Template -> Content)
 * 2. Manager : 주입된 Content(+Template)의 렌더링
 *
 * 3. Content : 내용 담당 (외부에서 show 인터페이스로 string 또는 ReactElement 주입)
 * 4. Template : close 애니메이션 및 레이아웃 스타일링
 *
 */

const TOAST_PORTAL_ID = 'toast-portal';

export const ToastPortal = () => {
  const ref = useRef();
  const isMounted = useMount();

  useEffect(() => {
    ref.current = document.getElementById(TOAST_PORTAL_ID);
  }, []);

  return isMounted && createPortal(<Manager />, ref.current);
};
