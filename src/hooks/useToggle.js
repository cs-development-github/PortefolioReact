import { useState } from 'react';

function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => setIsOpen(!isOpen);
  return [isOpen, toggle];
}

export default useToggle;
