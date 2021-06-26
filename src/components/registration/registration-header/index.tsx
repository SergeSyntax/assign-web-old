import React, { ReactElement } from 'react';
import { RegistrationHeaderLogo } from './registration-header-logo.style';
import { RegistrationHeaderText } from './registration-header-text.style';
import { RegistrationHeaderWrapper } from './registration-header-wrapper.style';

export default function RegistrationHeader(): ReactElement {
  return (
    <RegistrationHeaderWrapper>
      <RegistrationHeaderLogo />
      <RegistrationHeaderText>make most of your teamwork!</RegistrationHeaderText>
    </RegistrationHeaderWrapper>
  );
}
