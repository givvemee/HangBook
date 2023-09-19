import { PropsType } from '../type';
import { ItemAuthor, ItemImg, ItemTitle, SearchBookItems } from './style';

const SearchBookSub = ({ books }: PropsType) => {
  const { title, author } = books;
  return (
    <SearchBookItems>
      <ItemImg src={books.cover} alt={title} />
      <ul>
        <li>
          <ItemTitle>{title}</ItemTitle>
        </li>
        <li>
          <ItemAuthor>{author}</ItemAuthor>
        </li>
      </ul>
    </SearchBookItems>
  );
};

export default SearchBookSub;
