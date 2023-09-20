import { createStitches } from '@stitches/react';
import { Montserrat, Noto_Sans_KR } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  display: 'swap',
});

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: '#E6E9F1',
      container: '#FEFEFE',
      text: '#333333',
      subText: '#666666',
      inactiveText: '#CCCCCC',
      normalGrey: '#EEEEEE',
    },
    fonts: {
      montserrat: `${montserrat.style.fontFamily}, sans-serif`,
      noto: `${noto.style.fontFamily}, sans-serif`,
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
});

export const darkTheme = createTheme({
  colors: {
    background: '#0B0B09',
    container: '#19160E',
    text: '#E6E9F1',
    subText: '#666666',
    inactiveText: '#CCCCCC',
    normalGrey: '#EEEEEE',
  },
  fonts: {
    montserrat: `${montserrat.style.fontFamily}, sans-serif`,
    noto: `${noto.style.fontFamily}, sans-serif`,
  },
});
