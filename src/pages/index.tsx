import React from 'react';
import { About } from 'src/components/landing/about';
import { Features } from 'src/components/landing/features';
import { Footer } from 'src/components/landing/footer';
import { LandingHeader } from 'src/components/landing/landing-header';
import { ScrollUpButton } from 'src/components/landing/scroll-up-button';
import { NextPage } from 'next';
import { Fragment } from 'react';
import SEO from 'src/components/common/seo';

const LandingPage: NextPage = () => (
  <Fragment>
    <SEO description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog." />
    <LandingHeader />
    <About />
    <Features />
    <Footer />
    <ScrollUpButton />
  </Fragment>
);

export default LandingPage;
