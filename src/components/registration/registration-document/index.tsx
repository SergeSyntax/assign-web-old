import { OpenAuth } from 'src/components/common/open-auth';
import React from 'react';
import RegistrationDocumentWrapper from './registration-document-wrapper.style';
import RegistrationDocumentForm from './registration-document-form';
import { RegistrationDocumentCondition } from './registration-document-condition';
import { RegistrationDocumentLoginOffer } from './registration-document-login-offer';
import RouteLink from 'src/components/common/route-link';

export const RegistrationDocument: React.FC = () => {
  return (
    <RegistrationDocumentWrapper>
      {/* Open Authentication */}
      <OpenAuth />
      {/* Forum */}
      <RegistrationDocumentForm />
      {/* Links to conditions and sign in page */}
      <RegistrationDocumentCondition>
        you agree to the
        <RouteLink href="/register">Privacy Policy</RouteLink>
        and
        <RouteLink href="/register">Terms of Use</RouteLink>
      </RegistrationDocumentCondition>

      <RegistrationDocumentLoginOffer>
        already on assign?
        <RouteLink href="/login">sign in</RouteLink>
      </RegistrationDocumentLoginOffer>
    </RegistrationDocumentWrapper>
  );
};
