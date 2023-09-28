import { styled } from 'styles/stitches.config';

export const LeftImg = styled('img', {
  width: '160px',
  height: 'auto',
  margin: '20px auto',
  textAlign: 'center',
});

export const LeftTitle = styled('p', {
  fontSize: '18px',
  margin: '30px 0 20px',
  fontWeight: '500',
  fontStyle: 'italic',
  fontFamily: '$montserrat',
});

export const LeftBookTitle = styled('p', {
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: '$noto',
});

export const LeftInfo = styled('p', {
  margin: '10px 0',
  fontSize: '12px',
  fontFamily: '$noto',
});

export const LeftDesc = styled('p', {
  width: '80%',
  margin: '10px auto',
  fontFamily: '$noto',
});
