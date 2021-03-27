import { OpenAuth } from 'components/common/open-auth';
import React from 'react';
import LoginDocumentForm from './login-document-form';
import LoginDocumentWrapper from './login-document-wrapper.style';

export const LoginDocument: React.FC = () => {
  return (
    <LoginDocumentWrapper>
      {/* Open Authentication */}
      <OpenAuth />
      {/* Forum */}
      <LoginDocumentForm />
    </LoginDocumentWrapper>
  );
};
