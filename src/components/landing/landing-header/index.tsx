import React from 'react';
import { LandingHeaderWrapper } from './landing-header-wrapper.style';
import { LandingHeaderTitle } from './landing-header-title';
import ScrollDownButton from './scroll-down-button';
import { LandingHeaderLogo } from './landing-header-logo.style';
import { LandingHeaderButtons } from './landing-header-buttons';
// import { LandingHeaderLogo } from './landing-header-logo';

export const LandingHeader: React.FC = () => {
  return (
    <LandingHeaderWrapper>
      <LandingHeaderLogo />
      <LandingHeaderTitle />
      <LandingHeaderButtons />
      <ScrollDownButton />
    </LandingHeaderWrapper>
  );
};
