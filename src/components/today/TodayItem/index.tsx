import {
  SearchTitle,
  TodaysCategory,
  TodaysDesc,
  TodaysImg,
  TodaysLeft,
  TodaysRight,
  TodaysRightBtm,
  TodaysWrap,
} from './style';
import { ItemType } from './type';

const TodayItem = (props: ItemType) => {
  return (
    <TodaysWrap>
      <TodaysLeft>
        <TodaysImg src={props.cover} alt={props.title} />
      </TodaysLeft>
      <TodaysRight>
        <div>
          <SearchTitle>{props.title}</SearchTitle>
          <TodaysCategory>{props.categoryName}</TodaysCategory>
          <TodaysDesc>{props.description}</TodaysDesc>
        </div>
        <TodaysRightBtm>
          <p>
            <span>지은이 : </span>
            {props.author}
          </p>
          <p>
            <span>출판사 : </span>
            {props.publisher}
          </p>
          <p>
            <span>출간일 : </span>
            {props.pubDate}
          </p>
          <p>
            <span>ISBN : </span>
            {props.isbn}
          </p>
          <p>
            <span>가격 : </span>
            {props.priceSales}
          </p>
          <p>
            <span>현재 베스트셀러 순위 : </span>
            {props.bestRank}
          </p>
        </TodaysRightBtm>
      </TodaysRight>
    </TodaysWrap>
  );
};

export default TodayItem;
