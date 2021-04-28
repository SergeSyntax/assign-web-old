import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline, MdPersonOutline } from 'react-icons/md';
import PasswordField from 'components/common/field/password';
import { useActions, useSelector } from 'store/store-hooks';
import { LabeledTextField } from 'components/common/field/text-labled';
import SubmitButtonWide from 'components/common/button/submit-wide';

const validationSchema = Yup.object().shape({
  email: Yup.string().min(3).max(255).email().required(),
  password: Yup.string().min(5).max(255).required(),
  name: Yup.string().min(1).max(255).required(),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const user: FormValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationDocumentForm: React.FC = () => {
  const isLoading = useSelector(state => state.auth.loading);
  const { authRegistration } = useActions();
  const onSubmit = (values: FormValues) => {
    authRegistration(values);
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
              icon={MdPersonOutline}
              name="name"
              type="text"
              placeholder="i.e. Steve Rozmarin"
            />
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
            <SubmitButtonWide inProgress={isLoading} type="submit" text="Agree & Join" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationDocumentForm;
