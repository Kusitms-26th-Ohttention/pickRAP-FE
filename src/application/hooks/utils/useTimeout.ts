import { useEffect } from 'react';

const useTimeout = (cb: (...args: any[]) => unknown, delay: number) => {
  useEffect(() => {
    const id = setTimeout(cb, delay);
    return () => clearTimeout(id);
  }, [cb, delay]);
};

export default useTimeout;
