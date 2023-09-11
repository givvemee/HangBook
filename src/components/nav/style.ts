import { IoIosArrowForward } from 'react-icons/io';
import { styled } from 'styles/stitches.config';

export const NavContainer = styled('nav', {
  width: '100%',
});

export const NavListWrap = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
});

export const MenuList = styled('li', {
  height: '80px',
  fontSize: '20px',
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',

  a: {
    color: '#aaa',
    textDecoration: 'none',
  },
});

export const Arrow = styled(IoIosArrowForward, {
  color: '#aaa',
});
