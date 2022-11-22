import { useCallback, useState } from 'react';

interface UseInputOptions {
  validator?: (s: string) => boolean;
  maxLength?: number;
}

export const useInput = (args?: UseInputOptions) => {
  const [state, setState] = useState('');
  const handleState = useCallback(
    (t: string) => (args?.maxLength && args.maxLength < t.length ? void 0 : setState(t)),
    [args?.maxLength],
  );
  const isValid = args?.validator?.(state);
  return [state, handleState, isValid] as const;
};
