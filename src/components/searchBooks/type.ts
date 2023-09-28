import { ItemType } from "../today/TodayItem/type";
import useStates from "./state";

export type PropsType = {
  books: ItemType;
};

export type StatesType = ReturnType<typeof useStates>;
