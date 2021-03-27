import styled from '@emotion/styled';
import React from 'react';
import { LoginAlternativeLink } from '../login-alternative-link';

const LoginAlternativeRegisterWrapper = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
  text-transform: capitalize;

  /* a {
    padding-left: 0.5rem;
    font-weight: bold;
    color: #318bd3;
  } */
`;

const LoginAlternativeRegister: React.FC = () => {
  return (
    <LoginAlternativeRegisterWrapper>
      New to Assign?
      <LoginAlternativeLink href="/registration">Join Now</LoginAlternativeLink>
    </LoginAlternativeRegisterWrapper>
  );
};

export default LoginAlternativeRegister;
