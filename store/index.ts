import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { InitialStateType, useStoreType } from "./type";

const initialState: InitialStateType = {
  isDarkMode: false,
  isLoading: false,
  searchKeyword: "react",
  searchedData: [],
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
      console.log(1, initialState.isLoading);
      set((state) => ({
        isLoading: !state.isLoading,
      }));
    },
    setSearchKeyword: (payload) => {
      set((state) => ({
        searchKeyword: payload,
      }));
    },
    setSearchedData: (payload) => {
      set((state) => ({
        searchedData: payload,
      }));
    },
  }))
);
