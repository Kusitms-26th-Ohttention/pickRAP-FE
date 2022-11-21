import { useEffect, useRef } from 'react';

interface UseIntersectionObserver {
  callback?: () => unknown;
}

const useIntersectionObserver = ({ callback }: UseIntersectionObserver) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!callback) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback();
      },
      { threshold: 1 },
    );

    ref.current && observer.observe(ref.current);

    return () => observer.disconnect();
  }, [callback]);

  return ref;
};

export default useIntersectionObserver;
