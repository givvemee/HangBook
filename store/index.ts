import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { InitialStateType, useStoreType } from './type';

const initialState: InitialStateType = {
  isDarkMode: false,
  isLoading: false,
};

export const useStore = create<useStoreType>()(
  devtools((set) => ({
    ...initialState,
    setIsDarkMode: () => {
      set((state) => ({
        isDarkMode: !state.isDarkMode,
      }));
    },
    setIsLoading: () => {
      set((state) => ({
        isLoading: !state.isLoading,
      }));
    },
  }))
);
