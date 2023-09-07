import { globalCss } from '@stitches/react';

export const resetCss = globalCss({
  '#__next': {
    height: '100%',
    fontFamily: 'SUIT',
  },

  html: {
    height: '100%',
  },

  body: {
    margin: '0',
    padding: '0',
    height: '100%',
  },

  '*': {
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
  },

  a: {
    display: 'block',
    color: '#333333',
    textDecoration: 'none',
  },

  'a:focus, button:focus, input:focus, label:focus, select:focus, textarea:focus': {
    outline: 'none',
  },

  'button, select': {
    cursor: 'pointer',
  },

  'button[disabled]': {
    cursor: 'not-allowed',
    backgroundColor: '#cccccc',
  },

  'dd, dl, ol, ul': {
    margin: '0',
    padding: '0',
  },

  li: {
    listStyle: 'none',
  },

  'input[type=`checkbox`]': {
    width: 'auto',
    cursor: 'pointer',
  },

  /* Chrome, Safari, Edge, Opera input number arrow is hide */
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: '0',
  },

  /* Firefox */
  'input[type=`number`]': {
    MozAppearance: 'textfield',
  },
  '@font-face': {
    fontFamily: '$pretendard',
    fontWeight: '400',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
});
