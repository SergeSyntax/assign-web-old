import styled from '@emotion/styled';
import React from 'react';
import { LoginAlternativeLink } from '../login-alternative-link';

const LoginAlternativeRecoveryWrapper = styled.p`
  font-size: 1.5rem;

  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

const LoginAlternativeRecovery: React.FC = () => {
  return (
    <LoginAlternativeRecoveryWrapper>
      <LoginAlternativeLink href="/password-recovery">Forgot password?</LoginAlternativeLink>
    </LoginAlternativeRecoveryWrapper>
  );
};

export default LoginAlternativeRecovery;
