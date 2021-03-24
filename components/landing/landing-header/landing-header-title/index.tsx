import React from 'react';
import { LandingHeaderTitleMain } from './landing-header-title-main.style';
import { LandingHeaderTitleSub } from './landing-header-title-sub.style';
import { LandingHeaderTitleWrapper } from './landing-header-title-wrapper.style';

export const LandingHeaderTitle: React.FC = () => {
  return (
    <LandingHeaderTitleWrapper>
      <LandingHeaderTitleMain>assign your team</LandingHeaderTitleMain>
      <LandingHeaderTitleSub>to the right direction</LandingHeaderTitleSub>
    </LandingHeaderTitleWrapper>
  );
};
