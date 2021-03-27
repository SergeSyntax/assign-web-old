import { LoginDocument } from 'components/login/login-document';
import LoginHeader from 'components/login/login-header';
import LoginAlternativeOffer from 'components/login/login-alternative';
import { LoginWrapper } from 'components/login/login-wrapper.style';
import { NextPage } from 'next';
import React from 'react';

const Login: NextPage = () => (
  <LoginWrapper>
    <LoginHeader />
    <LoginDocument />
    <LoginAlternativeOffer />
  </LoginWrapper>
);

export default Login;
