import { useState } from "react";

const useStates = () => {
  const [error, setError] = useState<null | string>("");

  const getter = { error };

  const setter = { setError };

  return {
    ...getter,
    ...setter,
  };
};

export default useStates;
