import type { Dispatch, PropsWithChildren, ReactElement, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

export interface ToastContentProps {
  id: number;
  content: ReactElement | string;
  type?: 'toast' | 'popup' | 'modal';
}

type ToastContextProps = [ToastContentProps[], Dispatch<SetStateAction<ToastContentProps[]>>];

export const ToastContext = createContext<ToastContextProps[0]>([]);
export const ToastSetContext = createContext<ToastContextProps[1]>(null as unknown as ToastContextProps[1]);

export const useToastContext = () => useContext(ToastContext);
export const useToastSetContext = () => useContext(ToastSetContext);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const value = useState([] as ToastContentProps[]);
  return (
    <ToastContext.Provider value={value[0]}>
      <ToastSetContext.Provider value={value[1]}>{children}</ToastSetContext.Provider>
    </ToastContext.Provider>
  );
};
