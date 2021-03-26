import { Field } from 'formik';
import React, { Fragment } from 'react';
import { InputLabeledProps } from './input-labeled-props.interface';
import { InputLabeledTextLabel } from './input-labeled-text-label';
import { TextInput } from '../text-input';

export const InputLabeledText: React.FC<InputLabeledProps> = ({ icon, name, label, ...rest }) => {
  return (
    <Fragment>
      <InputLabeledTextLabel icon={icon} htmlFor={label ? label : name} name={name} />
      <Field {...rest} name={name} component={TextInput} />
    </Fragment>
  );
};
