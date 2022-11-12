import type { Dispatch, PropsWithChildren, ReactElement, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

interface ToastContentProps {
  id: number;
  content: ReactElement;
}

type ToastContextProps = [ToastContentProps[], Dispatch<SetStateAction<ToastContentProps[]>>];

const ToastContext = createContext<ToastContextProps>();

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const value = useState([]);
  return <ToastContext.Provider value={value}> {children}</ToastContext.Provider>;
};
