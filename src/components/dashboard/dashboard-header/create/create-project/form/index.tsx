import React from 'react';
import SubmitButton from 'src/components/common/button/submit';
import { TextButton } from 'src/components/common/button/text';
import { SelectOptions } from 'src/components/common/field/select';
import { LabeledSelectField } from 'src/components/common/field/select-labled';
import { LabeledTextField } from 'src/components/common/field/text-labled';
import { Form, Formik } from 'formik';
import { TiTag } from 'react-icons/ti';
import { DialogActions } from '@material-ui/core';
import { createProjectValidationSchema } from './schema';

interface FormValues {
  title: string;
  accessibility: 'private' | 'public';
}

interface Props {
  handleClose: () => void;
}

const initialValues: FormValues = {
  title: '',
  accessibility: 'public',
};

const values: SelectOptions[] = [
  { key: 'private', value: 'private' },
  { key: 'public', value: 'public' },
];

const CreateProjectForm = ({ handleClose }: Props) => {
  return (
    <Formik<FormValues>
      validationSchema={createProjectValidationSchema}
      initialValues={initialValues}
      onSubmit={console.log}
    >
      {() => {
        return (
          <Form autoComplete="off" noValidate>
            <LabeledTextField
              icon={TiTag}
              name="title"
              type="text"
              placeholder="i.e. SkyNet Project"
            />
            <LabeledSelectField icon={TiTag} name="accessibility" values={values} />
            <DialogActions>
              <TextButton onClick={handleClose}>cancel</TextButton>
              <SubmitButton inProgress={false} text="create" />
            </DialogActions>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateProjectForm;
