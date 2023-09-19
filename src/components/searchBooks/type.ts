import { ItemType } from '../today/TodayItem/type';

export type PropsType = {
  books: ItemType;
};

export type InputType = {
  searching: (val: string) => void;
};
