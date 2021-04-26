import AuthButton from 'components/common/auth-button.style';
import React from 'react';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline } from 'react-icons/md';
import PasswordField from 'components/common/field/password';
import { useDispatch } from 'react-redux';
import { authLogin } from 'store/auth/auth.action';
import { LabeledTextField } from 'components/common/field/text-labled';

const validationSchema = Yup.object().shape({
  email: Yup.string().min(3).max(255).email().required(),
  password: Yup.string().min(5).max(255).required(),
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
  const dispatch = useDispatch();
  const onSubmit = (values: FormValues) => {
    dispatch(authLogin(values));
  };

  return (
    <Formik<FormValues>
      validationSchema={validationSchema}
      initialValues={user}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form autoComplete="off" noValidate>
            <LabeledTextField
              icon={MdMailOutline}
              name="email"
              type="email"
              placeholder="i.e. example@example.com"
            />
            <PasswordField
              icon={MdLockOutline}
              name="password"
              placeholder="i.e. example@!%$5475347"
            />
            <AuthButton type="submit">Agree & Join</AuthButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginDocumentForm;
