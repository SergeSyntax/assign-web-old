import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { ScrollUpButtonFab } from './scroll-up-button-fab.style';
import { Zoom } from '@material-ui/core';
import { IoIosArrowUp } from 'react-icons/io/';

export const ScrollUpButton: React.FC = () => {
  let trigger = false;

  if (typeof window !== 'undefined')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    trigger = useScrollTrigger({
      target: window ? window : undefined,
      disableHysteresis: true,
      threshold: window.innerHeight * 0.5,
    });

  return (
    <Zoom in={trigger}>
      <ScrollUpButtonFab
        // style={{ color: '#fff', background: 'rgb(32, 35, 42)' }}
        color="default"
        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
      >
        <IoIosArrowUp />
      </ScrollUpButtonFab>
    </Zoom>
  );
};
