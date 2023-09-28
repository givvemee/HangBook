'use client';
import { FaRegWindowClose } from 'react-icons/fa';
import { useHandlers } from './handlers';
import { useStates } from './states';
import {
  BestItemImg,
  BestItemTitle,
  BestItems,
  BestItemsWrap,
  BestRank,
  DetailsCategory,
  DetailsClose,
  DetailsDesc,
  DetailsDesc1,
  DetailsImg,
  DetailsLeft,
  DetailsRank,
  DetailsRight,
  DetailsTitle,
  DetailsWrap,
} from './style';

const BestSellersList = (props: any) => {
  const states = useStates();
  const { showUpItem } = states;
  const { clickToClose, clickToShow } = useHandlers(states);

  const {
    bestRank,
    cover,
    title,
    categoryName,
    description,
    author,
    publisher,
  } = props;
  return (
    <BestItemsWrap>
      {showUpItem && (
        <DetailsWrap>
          <DetailsLeft>
            <DetailsRank>Best Seller # {bestRank}</DetailsRank>
            <DetailsImg src={cover} alt={title} />
          </DetailsLeft>
          <DetailsRight>
            <DetailsClose>
              <FaRegWindowClose onClick={clickToClose} />
            </DetailsClose>
            <DetailsTitle>{title}</DetailsTitle>
            <DetailsCategory>{categoryName}</DetailsCategory>
            <DetailsDesc>{description}</DetailsDesc>
            <DetailsDesc1>지은이 : {author}</DetailsDesc1>
            <DetailsDesc1>출판사 : {publisher}</DetailsDesc1>
          </DetailsRight>
        </DetailsWrap>
      )}

      <BestItems onClick={clickToShow}>
        <BestRank>{bestRank}</BestRank>
        <BestItemImg src={cover} alt={title} />
      </BestItems>
      <BestItemTitle>
        {title.length < 10 ? title : title.substr(0, 12) + '...'}
      </BestItemTitle>
    </BestItemsWrap>
  );
};

export default BestSellersList;
