import { styled } from 'styles/stitches.config';

export const SearchForm = styled('form', {
  width: '400px',
  position: 'relative',
  margin: '20px auto',
});

export const SearchInput = styled('input', {
  width: '400px',
  height: '40px',
  borderRadius: '20px',
  paddingLeft: '45px',
  fontFamily: 'Montserrat',
  boxShadow: '2px 4px 16px 3px rgba(191, 191, 191, 0.78)',
  outline: 'none',
  border: 'none',
  '&::placeholder': { fontFamily: 'Montserrat' },
});

export const SearchIcon = styled('div', {
  width: '20px',
  height: '20px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '20px',
  fontSize: '20px',
});
