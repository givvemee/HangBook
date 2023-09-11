'use client';
import { useStore } from 'store';
import { ModeContainer } from './style';

const Mode = () => {
  const { isDarkMode, setIsDarkMode } = useStore();

  const handleMode = () => {
    setIsDarkMode();
  };

  return (
    <ModeContainer>
      <span onClick={handleMode}>{isDarkMode ? '🌚' : '🌝'}</span>
    </ModeContainer>
  );
};

export default Mode;
