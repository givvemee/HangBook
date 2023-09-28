import axios from "axios";
import { StatesType } from "./type";
import { apiKey } from "../utils";
import { useStore } from "store";

const useHandler = (state: StatesType) => {
  const { setError } = state;
  const { searchKeyword, setSearchedData, setIsLoading } = useStore();
  const searchApi = `/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${searchKeyword}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901&Cover=Big`;

  const searchData = async () => {
    setIsLoading();
    try {
      const res = await axios.get(searchApi);
      const parsed = JSON.parse(res.data.substr(0, res.data.length - 1));
      setError(null);
      setSearchedData(parsed.item);
    } catch (e) {
      setError("Something went wrong");
    } finally {
      setIsLoading();
    }
  };

  return {
    searchData,
  };
};

export default useHandler;
