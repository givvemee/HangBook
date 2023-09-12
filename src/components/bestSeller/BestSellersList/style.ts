import { styled } from 'styles/stitches.config';

export const BestItemsWrap = styled('div', {
  width: '20%',
  height: '260px',
});

export const BestItems = styled('div', {
  width: '130px',
  height: '170px',
  margin: '10px auto',
  borderRadius: '20px',
  position: 'relative',
  '&:hover': { cursor: 'pointer', background: '$normalGrey' },
});

export const BestRank = styled('p', {
  fontSize: '50px',
  marginTop: '5px',
  marginLeft: '5px',
  fontStyle: 'italic',
  fontWeight: 'bold',
  opacity: 0.2,
});

export const DetailsImg = styled('img', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const BestItemImg = styled(DetailsImg, {
  width: '85px',
  height: 'auto',
});

export const BestItemTitle = styled('h4', {
  marginTop: '20px',
  textAlign: 'center',
  color: '$text',
  fontSize: '14px',
  fontWeight: 'bold',
});

export const DetailsWrap = styled('div', {
  position: 'fixed',
  height: '520px',
  width: 'calc((70vw - 100px) * 0.7)',
  top: 'calc(10vh + 90px + 56px)',
  right: 'calc(15vw + 50px)',
  background: 'rgba(0, 0, 0, 0.75)',
  zIndex: 99,
  borderRadius: '20px',
  overflow: 'hidden',
  padding: '30px',
  display: 'flex',
  color: '#fff',
  fontWeight: 'bold',
});

export const DetailsLeft = styled('div', {
  width: '80%',
  height: '100%',
  margin: '0 auto',
  padding: '10px',
  position: 'relative',
});

export const DetailsRank = styled('h4', {
  textAlign: 'center',
  fontSize: '20px',
  padding: '20px 0',
});

export const DetailsRight = styled('div', {
  width: '100%',
  height: '100%',
  margin: '0 auto',
  padding: '30px',
});

export const DetailsClose = styled('div', {
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
  fontSize: '28px',
  cursor: 'pointer',
});

export const DetailsTitle = styled('div', {
  textAlign: 'center',
  fontSize: '28px',
});

export const DetailsCategory = styled('div', {
  color: '#aaa',
  width: '80%',
  margin: '0 auto',
  fontSize: '12px',
  padding: '10px 0',
  textAlign: 'center',
});

export const DetailsDesc1 = styled('div', {
  margin: '10px 0',
});

export const DetailsDesc = styled('div', {
  maring: '20px 0',
  fontSize: '16px',
});
