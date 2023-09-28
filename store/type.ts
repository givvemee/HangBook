import { ItemType } from "@/components/today/TodayItem/type";

export type InitialStateType = {
  isDarkMode: boolean;
  isLoading: boolean;
  searchKeyword: string | null;
  searchedData: ItemType[];
};

export interface useStoreType extends InitialStateType {
  setIsDarkMode: () => void;
  setIsLoading: () => void;
  setSearchKeyword: (arg: InitialStateType["searchKeyword"]) => void;
  setSearchedData: (arg: ItemType[]) => void;
}
