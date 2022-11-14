import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

//  현재 선택된 value, OptionList의 open 여부, onChangeCallback
export interface SelectProps {
  value: string;
  onChange?: (currentValue: string) => any;
  open?: boolean;
}

type SelectContextProps = [SelectProps, Dispatch<SetStateAction<SelectProps>>];

export const SelectContext = createContext<SelectContextProps>([] as unknown as SelectContextProps);

export const useSelectContext = () => useContext(SelectContext);
