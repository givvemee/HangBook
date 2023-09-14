'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStore } from 'store';
import Loading from '../common/loading/index';
import { PageTitle } from '../common/style';
import { bestSellersApi } from '../utils';
import TodayItem from './TodayItem';
import { ItemType } from './TodayItem/type';
import { TodaySubTitle } from './style';

const TodayContainer = () => {
  const { isLoading, setIsLoading } = useStore();
  const [item, setItem] = useState<ItemType>();

  useEffect(() => {
    setIsLoading();
    const getData = async () => {
      try {
        const res = await axios.get(bestSellersApi);
        setItem(
          res.data.item[Math.floor(Math.random() * (res.data?.item).length)]
        );
        setIsLoading();
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <PageTitle>Today's Recommend for you</PageTitle>
      <TodaySubTitle>
        HangBook will recommend a book only for you.
      </TodaySubTitle>
      {isLoading && <Loading />}
      {item && <TodayItem {...item} />}
    </>
  );
};

export default TodayContainer;
