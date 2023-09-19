import { ItemType } from '@/components/today/TodayItem/type';
import SearchBookSub from '../SearchBookSub';
import SearchBookSubLeft from '../SearchBookSubLeft';
import { SearchBookLeft, SearchBookRight, SearchBookWrap } from './style';

type Propss = {
  data: ItemType[];
};

const SearchBookCont = ({ data }: Propss) => {
  return (
    <SearchBookWrap>
      {data.slice(0, 1).map((books) => (
        <SearchBookLeft>
          <SearchBookSubLeft key={books.isbn13} books={books} />
        </SearchBookLeft>
      ))}
      <SearchBookRight>
        {data.slice(1, 5).map((books) => (
          <SearchBookSub key={books.isbn} books={books} />
        ))}
      </SearchBookRight>
    </SearchBookWrap>
  );
};

export default SearchBookCont;
