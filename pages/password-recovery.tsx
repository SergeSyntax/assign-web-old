import { PasswordRecoveryContent } from 'components/password-recovery/password-recovery-content.style';
import PasswordRecoveryForm from 'components/password-recovery/password-recovery-form';
import { PasswordRecoveryFormWrapper } from 'components/password-recovery/password-recovery-form/password-recovery-form-wrapper.style';
import { PasswordRecoveryHeading } from 'components/password-recovery/password-recovery-heading.style';
import { PasswordRecoveryLogo } from 'components/password-recovery/password-recovery-logo.style';
import { PasswordRecoveryWrapper } from 'components/password-recovery/password-recovery-wrapper.style';
import { NextPage } from 'next';

const PasswordRecovery: NextPage = () => (
  <PasswordRecoveryWrapper>
    <PasswordRecoveryLogo />
    <PasswordRecoveryHeading>Can&apos;t login?</PasswordRecoveryHeading>
    <PasswordRecoveryContent>
      <span>If you’ve lost or forgotten your password fill the next form</span>
      <span>to receive an email with a password recovery code.</span>
    </PasswordRecoveryContent>
    <PasswordRecoveryFormWrapper>
      <PasswordRecoveryForm />
    </PasswordRecoveryFormWrapper>
  </PasswordRecoveryWrapper>
);

export default PasswordRecovery;
