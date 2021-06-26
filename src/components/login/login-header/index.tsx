import React from 'react';
import { LoginHeaderLogo } from './login-header-logo.style';
import { LoginHeaderTitleContent } from './login-header-title-content.style';
import { LoginHeaderTitleWrapper } from './login-header-title-wrapper.style';
import { LoginHeaderTitle } from './login-header-title.style';
import { LoginHeaderWrapper } from './login-header-wrapper.style';

const LoginHeader: React.FC = () => {
  return (
    <LoginHeaderWrapper>
      <LoginHeaderLogo />
      <LoginHeaderTitleWrapper>
        <LoginHeaderTitle>Welcome Back!</LoginHeaderTitle>
        <LoginHeaderTitleContent>
          <span>Ready to get your team on track?</span>
          <span>Then don&apos;t delay organize and prioritize your project</span>
          <span>with Assign?</span>
        </LoginHeaderTitleContent>
      </LoginHeaderTitleWrapper>
    </LoginHeaderWrapper>
  );
};

export default LoginHeader;
