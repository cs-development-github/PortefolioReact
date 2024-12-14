import { useState, useCallback } from 'react';

type UseToggle = [boolean, () => void];

const useToggle = (initialState: boolean = false): UseToggle => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle];
};

export default useToggle;