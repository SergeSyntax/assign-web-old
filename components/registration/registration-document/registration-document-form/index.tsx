import AuthButton from 'components/common/auth-button.style';
import { LabeledField } from 'components/common/labeled-field';
import React from 'react';
import { MdLockOutline, MdMailOutline, MdPersonOutline } from 'react-icons/md';

const RegistrationDocumentForm: React.FC = () => {
  return (
    <form>
      <LabeledField
        icon={MdPersonOutline}
        name="name"
        type="text"
        placeholder="i.e. Steve Rozmarin"
      />
      <LabeledField
        icon={MdMailOutline}
        name="email"
        type="email"
        placeholder="i.e. example@example.com"
      />
      <LabeledField
        icon={MdLockOutline}
        name="password"
        type="password"
        placeholder="i.e. example@!%$5475347"
      />
      <AuthButton type="submit">Agree & Join</AuthButton>
    </form>
  );
};

export default RegistrationDocumentForm;
