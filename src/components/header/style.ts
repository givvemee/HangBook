import { styled } from '../../../styles/stitches.config';

export const HeadWrap = styled('div', {
  width: '80%',
  height: 'calc(100%- 200px)',
  margin: '0 auto',
  position: 'relative',
});

export const Head = styled('header', {
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Montserrat',
});

export const HeaderTitle = styled('h1', {
  display: 'inline-block',
  fontSize: '20px',
  textAlign: 'center',
  padding: '0px',
  height: 'auto',
  // TODO
  // color: ${(props) => props.theme.textColor};
  span: {
    fontStyle: 'italic',
    fontSize: '24px',
    fontWeight: 'bold',
  },
});
