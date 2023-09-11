import Link from 'next/link';
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
  fontWeight: 'bold',
});

export const MenuLink = styled(Link, {
  color: '#AAA',
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    isActive: {
      true: {
        color: '#000',
      },
      false: {
        color: '#AAA',
      },
    },
  },
});

export const Arrow = styled(IoIosArrowForward, {});
