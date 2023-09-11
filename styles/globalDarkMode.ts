'use client';
import { createStitches } from '@stitches/react';
import { useStore } from 'store';

const { styled } = createStitches();

export const DarkModeStyle = () => {
  const { isDarkMode } = useStore();

  return styled('div', {
    backgroundColor: isDarkMode ? '#0A0A0A' : '#E6E7F3',
  });
};
