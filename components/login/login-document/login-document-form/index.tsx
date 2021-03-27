import AuthButton from 'components/common/auth-button.style';
import React from 'react';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline } from 'react-icons/md';
import { InputLabeledText } from 'components/common/input-labeled-text/index';
import InputLabeledPassword from 'components/common/input-labeled-password';

const validationSchema = Yup.object().shape({
  email: Yup.string().min(3).max(255).email().required(),
  password: Yup.string().min(5).max(255).required(),
  name: Yup.string().min(1).max(255).required(),
});

interface FormValues {
  email: string;
  password: string;
}

const user: FormValues = {
  email: '',
  password: '',
};

const LoginDocumentForm: React.FC = () => {
  return (
    <Formik<FormValues>
      validationSchema={validationSchema}
      initialValues={user}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form autoComplete="off" noValidate>
            <InputLabeledText
              icon={MdMailOutline}
              name="email"
              type="email"
              placeholder="i.e. example@example.com"
            />
            <InputLabeledPassword
              icon={MdLockOutline}
              name="password"
              placeholder="i.e. example@!%$5475347"
            />
            <AuthButton disabled={isSubmitting} type="submit">
              Agree & Join
            </AuthButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginDocumentForm;
