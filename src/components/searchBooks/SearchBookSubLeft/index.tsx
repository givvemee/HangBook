import { PropsType } from '../type';
import { LeftBookTitle, LeftDesc, LeftImg, LeftInfo, LeftTitle } from './style';

const SearchBookSubLeft = ({ books }: PropsType) => {
  const { title, author, cover, description } = books;
  return (
    <>
      <LeftTitle>Most Relavant Result</LeftTitle>
      <LeftImg src={cover} alt={title} />
      <ul>
        <li>
          <LeftBookTitle>{title}</LeftBookTitle>
        </li>
        <li>
          <LeftInfo>{author}</LeftInfo>
        </li>
        <li>
          <LeftDesc>
            {description && description?.length < 100
              ? description
              : description?.substr(0, 70) + '...'}
          </LeftDesc>
        </li>
      </ul>
    </>
  );
};

export default SearchBookSubLeft;
