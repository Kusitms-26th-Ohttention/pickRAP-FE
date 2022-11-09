import { useCallback, useState } from 'react';

export const useInput = (args?: { validator: (s: string) => boolean }) => {
  const [state, setState] = useState('');
  const handleState = useCallback((t: string) => setState(t), []);
  const isValid = args?.validator(state);
  return [state, handleState, isValid] as const;
};
