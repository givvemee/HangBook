import { useState } from 'react';

export const useStates = () => {
  const [showUpItem, setShowUpItem] = useState(false);

  const getter = {
    showUpItem,
  };

  const setter = {
    setShowUpItem,
  };

  return {
    ...getter,
    ...setter,
  };
};
