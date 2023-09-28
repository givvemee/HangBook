import { styled } from 'styles/stitches.config';

export const SearchBookItems = styled('div', {
  width: '44%',
  textAlign: 'center',
  margin: '10px',
  padding: '10px',
  fontFamily: '$noto',
});

export const ItemImg = styled('img', {
  width: '90px',
  height: 'auto',
});

export const ItemTitle = styled('p', {
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '5px 0',
});

export const ItemAuthor = styled('p', {
  fontSize: '12px',
});
