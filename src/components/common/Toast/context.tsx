import type { Dispatch, PropsWithChildren, ReactElement, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

export interface ToastContentProps {
  id: number;
  content: ReactElement | string;
  type?: 'toast' | 'popup';
}

type ToastContextProps = [ToastContentProps[], Dispatch<SetStateAction<ToastContentProps[]>>];

export const ToastContext = createContext<ToastContextProps>([] as unknown as ToastContextProps);

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const value = useState([] as ToastContentProps[]);
  return <ToastContext.Provider value={value}> {children}</ToastContext.Provider>;
};
