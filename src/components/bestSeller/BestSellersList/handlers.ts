import { StatesType } from './type';

export const useHandlers = (states: StatesType) => {
  const { setShowUpItem } = states;

  const clickToShow = () => {
    setShowUpItem((prev) => !prev);
  };
  const clickToClose = () => {
    setShowUpItem(false);
  };

  return { clickToShow, clickToClose };
};
