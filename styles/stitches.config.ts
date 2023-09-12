import { createStitches } from '@stitches/react';

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
  },
});
