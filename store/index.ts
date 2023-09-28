import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { InitialStateType, useStoreType } from "./type";

const initialState: InitialStateType = {
  isDarkMode: false,
  isLoading: false,
  searchKeyword: "리액트",
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
    setSearchKeyword: (payload) => {
      set((state) => ({
        searchKeyword: payload,
      }));
    },
  }))
);
