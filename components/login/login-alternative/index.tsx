import React, { Fragment } from 'react';
import LoginAlternativeRecovery from './login-alternative-recovery';
import LoginAlternativeRegister from './login-alternative-register';

const LoginAlternative: React.FC = () => {
  return (
    <Fragment>
      <LoginAlternativeRecovery />
      <LoginAlternativeRegister />
    </Fragment>
  );
};

export default LoginAlternative;
