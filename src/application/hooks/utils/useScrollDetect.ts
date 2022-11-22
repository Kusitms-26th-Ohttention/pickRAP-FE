import { useEffect, useRef } from 'react';

export interface UseScrollDetectOption {
  onScroll?: (direct: 'up' | 'down') => void;
}

const useScrollDetect = <T extends HTMLElement>({ onScroll }: UseScrollDetectOption) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const threshold = 100;
    let lastScrollY = target.scrollTop;
    let ticking = false;

    const updateScrollDir = () => {
      ticking = false;
      const scrollY = target.scrollTop;

      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      scrollY > lastScrollY ? onScroll?.('up') : onScroll?.('down');

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    target?.addEventListener('scroll', handleScroll, { passive: true });

    return () => target?.removeEventListener('scroll', handleScroll);
  }, [onScroll]);
  return ref;
};

export default useScrollDetect;
