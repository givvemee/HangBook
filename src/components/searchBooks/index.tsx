"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useStore } from "store";
import Loading from "../common/loading/index";
import { PageTitle } from "../common/style";
import { apiKey, bestSellersApi } from "../utils";
import SearchBookCont from "./SearchBookContainer";
import SearchBookInput from "./SearchBookInput";

const SearchBooksContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>("");
  const { searchKeyword, setSearchKeyword } = useStore();
  const searchApi = `/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${searchKeyword}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901&Cover=Big`;

  useEffect(() => {
    const searchData = async () => {
      try {
        const res = await axios.get(searchApi);
        const parsed = JSON.parse(res.data.substr(0, res.data.length - 1));
        setIsLoading(true);
        setError(null);
        setData(parsed.item);
      } catch (e) {
        setError("Something went wrong");
      }
      setIsLoading(false);
    };
    searchData();
  }, [searchKeyword]);

  const searching = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <>
      <PageTitle>Search Books</PageTitle>
      {isLoading && <Loading />}
      <SearchBookInput searching={searching} />
      <SearchBookCont data={data} />
    </>
  );
};

export default SearchBooksContainer;
