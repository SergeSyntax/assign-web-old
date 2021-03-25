import React from 'react';
import { ScrollDownButtonStyled } from './scroll-down-button.style';

const ScrollDownButton: React.FC = () => (
  <ScrollDownButtonStyled
    onClick={e => {
      e.currentTarget.blur();
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }}
  />
);

export default ScrollDownButton;
