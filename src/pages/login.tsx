import { LoginDocument } from 'src/components/login/login-document';
import LoginHeader from 'src/components/login/login-header';
import LoginAlternativeOffer from 'src/components/login/login-alternative';
import { LoginWrapper } from 'src/components/login/login-wrapper.style';
import { NextPage } from 'next';
import React from 'react';
import SEO from 'src/components/common/seo';

const Login: NextPage = () => (
  <LoginWrapper>
    <SEO title="Sign In" description="Sign into Assign." />

    <LoginHeader />
    <LoginDocument />
    <LoginAlternativeOffer />
  </LoginWrapper>
);

export default Login;
