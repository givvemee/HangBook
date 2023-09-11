import { styled } from '../../styles/stitches.config';

export const MainBack = styled('div', {
  width: '100vw',
  height: '100vh',
  //TODO
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const FullWrap = styled('div', {
  width: '70vw',
  padding: '90px 50px',
  fontFamily: 'Montserrat',
  borderRadius: '20px',
  display: 'grid',
  gridTemplateColumns: '.25fr .75fr',
  //TODO
  background: 'lightgrey',

  '> div': {
    overflowX: 'hidden',
  },
});

export const LeftSide = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20vh',
  alignItems: 'stretch',
});

export const RightSide = styled('div', {
  width: '100%',
});
