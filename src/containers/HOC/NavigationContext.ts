import type { Dispatch, ReactElement, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

export type BottomNavigationState = ReactElement | 'default' | null;
export type NavigationContextProps = [BottomNavigationState, Dispatch<SetStateAction<BottomNavigationState>>];

export const BottomNavigationContext = createContext<NavigationContextProps>([] as unknown as NavigationContextProps);

export const useBottomNavigationContext = () => useContext(BottomNavigationContext);

/**
 * 요구사항
 *
 * 1. left : ReactElement
 * 2. title : align property
 * 3. right : ReactElement
 *
 */
export type TopNavigationState = ReactElement | 'default' | null;
