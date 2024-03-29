import React from 'react';
import { Form, Formik } from 'formik';
import { MdMailOutline } from 'react-icons/md';
import PasswordRecoveryFormButtonWrapper from './password-recovery-form-button-wrapper.style';
import Link from 'next/link';
import { PasswordRecoveryFormValues } from './password-recovery-form-values.interface';
import { validationSchema } from './password-recovery-form-schema';
import { PasswordRecoveryCancelButton } from './password-recovery-form-cancel-button.style';
import { PasswordRecoveryApproveButton } from './password-recovery-form-approve-button.style';
import { LabeledTextField } from 'src/components/common/field/text-labled';

const PasswordRecoveryForm: React.FC = () => {
  return (
    <Formik<PasswordRecoveryFormValues>
      validationSchema={validationSchema}
      initialValues={{ email: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form autoComplete="off" noValidate>
            <LabeledTextField
              icon={MdMailOutline}
              name="email"
              type="email"
              placeholder="i.e. example@example.com"
            />
            <PasswordRecoveryFormButtonWrapper>
              <Link href="/login">
                <PasswordRecoveryCancelButton variant="outlined" color="primary">
                  cancel
                </PasswordRecoveryCancelButton>
              </Link>

              <PasswordRecoveryApproveButton
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
              >
                send recovery code
              </PasswordRecoveryApproveButton>
            </PasswordRecoveryFormButtonWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PasswordRecoveryForm;
