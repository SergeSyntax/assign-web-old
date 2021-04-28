import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline } from 'react-icons/md';
import PasswordField from 'components/common/field/password';
import { LabeledTextField } from 'components/common/field/text-labled';
import SubmitButtonWide from 'components/common/button/submit-wide';
import { useActions, useSelector } from 'store/store-hooks';

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
  const isLoading = useSelector(state => state.auth.loading);
  const { authLogin } = useActions();
  const onSubmit = (values: FormValues): void => {
    authLogin(values);
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
            <SubmitButtonWide text="Sign In" inProgress={isLoading} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginDocumentForm;
