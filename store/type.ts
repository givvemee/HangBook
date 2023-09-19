export type InitialStateType = {
  isDarkMode: boolean;
  isLoading: boolean;
  searchKeyword: string | null;
};

export interface useStoreType extends InitialStateType {
  setIsDarkMode: () => void;
  setIsLoading: () => void;
  setSearchKeyword: (arg: InitialStateType['searchKeyword']) => void;
}
