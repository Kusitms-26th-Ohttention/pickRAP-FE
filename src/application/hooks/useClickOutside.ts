import { useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLElement>(cb: (...args: unknown[]) => unknown) => {
  const ref = useRef<T>(null);
  const savedHandler = useRef(cb);

  useEffect(() => {
    savedHandler.current = cb;
  }, [cb]);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref.current) return;

      if (!ref.current?.contains(event.target as Node)) {
        savedHandler.current(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return ref;
};

export default useClickOutside;
