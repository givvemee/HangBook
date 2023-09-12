'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStore } from 'store';
import Loading from '../common/loading/index';
import { PageTitle } from '../common/style';
import { ItemType } from '../today/TodayItem/type';
import { bestSellersApi } from '../utils';
import BestSellersList from './BestSellersList';
import { BestSellerWrap } from './style';

const BestSellerContainer = () => {
  const { isLoading, setIsLoading } = useStore();
  const [bestSellers, setBestSellers] = useState<ItemType[]>([]);

  useEffect(() => {
    setIsLoading();
    const getData = async () => {
      try {
        const res = await axios.get(bestSellersApi);
        setBestSellers(res.data.item);
        setIsLoading();
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(1, bestSellers);
  }, [bestSellers]);

  return (
    <>
      <PageTitle>Best Seller</PageTitle>
      {bestSellers ? (
        <BestSellerWrap>
          {bestSellers.map((books) => {
            return <BestSellersList key={books.isbn} {...books} />;
          })}
        </BestSellerWrap>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default BestSellerContainer;
