import React from 'react';
import { LogoIcon } from './logo-icon.style';
import { LogoText } from './logo-text.style';
import LogoWrapper from './logo-wrapper.style';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = props => {
  return (
    <LogoWrapper {...props}>
      <LogoIcon />
      <LogoText>Assign</LogoText>
    </LogoWrapper>
  );
};
