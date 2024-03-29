import { styled } from 'styles/stitches.config';

export const QuoteWrap = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#A5A5A5',

  '>div': {
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
  },

  '>p': {
    fontSize: '14px',
    fontStyle: 'italic',
    fontWeight: '500',
    fontFamily: '$montserrat',

    svg: {
      fontSize: '12px',
    },
  },

  '.author': {
    marginTop: '5px',
    fontFamily: '$montserrat',
  },
});

export const QuoteRefresh = styled('button', {
  fontSize: '20px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
});
