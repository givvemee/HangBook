import { styled } from 'styles/stitches.config';

export const NavContainer = styled('nav', {
  width: '100%',
  position: 'absolute',
  top: '45%',
  transfrom: 'translateY(-50%)',
});

export const NavListWrap = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
});

export const MenuList = styled('li', {
  height: '80px',

  a: {
    color: '#aaa',
    textDecoration: 'none',
  },
});
