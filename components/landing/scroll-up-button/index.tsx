import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { ScrollUpButtonFab } from './scroll-up-button-fab.style';
import { Zoom } from '@material-ui/core';
import { IoIosArrowUp } from 'react-icons/io/';

export const ScrollUpButton: React.FC = () => {
  let trigger = false;

  trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: window.innerHeight * 0.5,
  });

  return (
    <Zoom in={trigger}>
      <ScrollUpButtonFab
        color="primary"
        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
      >
        <IoIosArrowUp />
      </ScrollUpButtonFab>
    </Zoom>
  );
};
