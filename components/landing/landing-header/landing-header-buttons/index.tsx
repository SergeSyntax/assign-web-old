import React from 'react';
import Link from 'next/link';
import LandingHeaderButtonsPrimary from './landing-header-buttons-primary.style';
import LandingHeaderButtonsSecondary from './landing-header-buttons-secondary.style';
import { LandingHeaderButtonsWrapper } from './landing-header-buttons-wrapper';

export const LandingHeaderButtons: React.FC = () => {
  return (
    <LandingHeaderButtonsWrapper>
      <Link href="/registration" passHref>
        <LandingHeaderButtonsPrimary variant="contained">join now</LandingHeaderButtonsPrimary>
      </Link>
      <Link href="/login" passHref>
        <LandingHeaderButtonsSecondary variant="outlined">sign in</LandingHeaderButtonsSecondary>
      </Link>
    </LandingHeaderButtonsWrapper>
  );
};
