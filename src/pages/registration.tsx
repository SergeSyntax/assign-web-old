import { RegistrationDocument } from 'src/components/registration/registration-document';
import RegistrationHeader from 'src/components/registration/registration-header';
import { RegistrationSignature } from 'src/components/registration/registration-signature.style';
import { RegistrationWrapper } from 'src/components/registration/registration-wrapper.style';
import { NextPage } from 'next';
import React from 'react';
import SEO from 'src/components/common/seo';

const Registration: NextPage = () => {
  return (
    <RegistrationWrapper>
      <SEO title="Registration" description="create an account for Assign" />

      <RegistrationHeader />
      <RegistrationDocument />
      <RegistrationSignature />
    </RegistrationWrapper>
  );
};

export default Registration;
