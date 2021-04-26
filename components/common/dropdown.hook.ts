import React, { useState } from 'react';

type UseDropdown = [Element | null, React.MouseEventHandler<HTMLButtonElement>, () => void];

const useDropdown = (initialState: Element | null): UseDropdown => {
  const [dropdown, setAnchorElement] = useState<Element | null>(initialState);

  const openDropdown: React.MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorElement(event.currentTarget);
  };

  const closeDropdown = () => {
    setAnchorElement(null);
  };

  return [dropdown, openDropdown, closeDropdown];
};

export default useDropdown;
