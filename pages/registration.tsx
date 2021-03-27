import { RegistrationDocument } from 'components/registration/registration-document';
import RegistrationHeader from 'components/registration/registration-header';
import { RegistrationSignature } from 'components/registration/registration-signature.style';
import { RegistrationWrapper } from 'components/registration/registration-wrapper.style';
import { NextPage } from 'next';
import React from 'react';

const Registration: NextPage = () => {
  return (
    <RegistrationWrapper>
      <RegistrationHeader />
      <RegistrationDocument />
      <RegistrationSignature />
    </RegistrationWrapper>
  );
};

export default Registration;
