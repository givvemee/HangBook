import { styled } from 'styles/stitches.config';

export const SearchBookWrap = styled('div', {
  width: '100%',
  height: '450px',
  display: 'flex',
  color: '$text',
});

export const SearchBookLeft = styled('div', {
  width: '45%',
  height: '450px',
  margin: '0 auto',
  textAlign: 'center',
  cursor: 'pointer',
});

export const SearchBookRight = styled('div', {
  width: '53%',
  height: '450px',
  display: 'flex',
  flexWrap: 'wrap',
  // overflow: 'hidden',
  padding: '10px',
});
