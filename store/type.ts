export type InitialStateType = {
  isDarkMode: boolean;
  isLoading: boolean;
};

export interface useStoreType extends InitialStateType {
  setIsDarkMode: () => void;
  setIsLoading: () => void;
}
