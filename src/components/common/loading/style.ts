import { keyframes, styled } from 'styles/stitches.config';

const LoadingAnimation = keyframes({
  '100%': {
    backgroundPosition: '0 0',
  },
});

export const NowLoading = styled('div', {
  width: '90px',
  height: '14px',
  background:
    'radial-gradient(circle closest-side, #000 92%, #0000) calc(100% / 3) 0 / calc(100% / 4) 100%',
  animation: `${LoadingAnimation} 0.5s infinite linear`,
});

export const LoadingContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
