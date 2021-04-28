import React from 'react';
import { About } from 'components/landing/about';
import { Features } from 'components/landing/features';
import { Footer } from 'components/landing/footer';
import { LandingHeader } from 'components/landing/landing-header';
import { ScrollUpButton } from 'components/landing/scroll-up-button';
import { NextPage } from 'next';
import { Fragment } from 'react';

const LandingPage: NextPage = () => (
  <Fragment>
    <LandingHeader />
    <About />
    <Features />
    <Footer />
    <ScrollUpButton />
  </Fragment>
);

export default LandingPage;
