import { useEffect, useRef } from 'react';

export interface UseScrollDetectOption {
  onScroll?: (direct: 'up' | 'down') => void;
}

const useScrollDetect = <T extends HTMLElement>({ onScroll }: UseScrollDetectOption) => {
  const ref = useRef<T>(null);
  const frame = useRef<number>(0);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const threshold = 300;
    let lastScrollY = target.scrollTop;

    /**
     * @todo
     *  스크롤이 bounce 되는 현상
     *  정확한 원인은 모르겠음
     */

    const updateScrollDir = () => {
      const scrollY = target.scrollTop;
      frame.current = 0;

      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      scrollY > lastScrollY ? onScroll?.('up') : onScroll?.('down');
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const handleScroll = () => {
      if (frame.current === 0) frame.current = requestAnimationFrame(updateScrollDir);
      else cancelAnimationFrame(frame.current);
    };

    target?.addEventListener('scroll', handleScroll, { passive: true });

    return () => target?.removeEventListener('scroll', handleScroll);
  }, [onScroll]);
  return ref;
};

export default useScrollDetect;
