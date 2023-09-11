import { styled } from 'styles/stitches.config';

export const TodaysWrap = styled('div', {
  width: '95%',
  margin: '0 auto',
  height: '560px',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  paddingTop: '60px',
  // color: ${(props) => props.theme.textColor};
});

export const TodaysLeft = styled('div', {
  width: '30%',
  paddingTop: '30px',
  position: 'relative',
});

export const TodaysImg = styled('img', {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const TodaysRight = styled('div', {
  width: '65%',
});

export const SearchTitle = styled('div', {
  textAlign: 'left',
  fontSize: '28px',
  margin: '20px 0',
  padding: '10px 0 0',
  fontWeight: 'bold',
});

export const TodaysCategory = styled('div', {
  color: '#aaa',
  width: '80%',
  fontSize: '12px',
});

export const TodaysDesc = styled('div', {
  fontSize: '18px',
  margin: '20px 0 40px',
});

export const TodaysRightBtm = styled('div', {
  borderTop: '1px solid #aaa',
  paddingTop: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  p: { width: '49%', margin: '5px 0', marginRight: '1%', fontSize: '14px' },
  span: { fontSize: '16px', marginRight: '10px', fontWeight: 'bold' },
});
