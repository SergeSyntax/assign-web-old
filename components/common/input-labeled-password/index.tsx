import { Field } from 'formik';
import React, { Fragment, useState } from 'react';
import { InputLabeledPasswordLabel } from './input-labeled-password-label';
import { TextInput } from '../text-input';
import { IconType } from 'react-icons/lib';

export interface InputLabeledPasswordProps {
  icon: IconType;
  name: string;
  placeholder: string;
  label?: string;
  helperText?: string;
}

const InputLabeledPassword: React.FC<InputLabeledPasswordProps> = ({
  icon,
  name,
  label,
  ...rest
}) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Fragment>
      <InputLabeledPasswordLabel
        icon={icon}
        htmlFor={label ? label : name}
        name={name}
        isHidden={isHidden}
        setIsHidden={() => setIsHidden(prevValue => !prevValue)}
      />
      <Field {...rest} name={name} type={isHidden ? 'password' : 'text'} component={TextInput} />
    </Fragment>
  );
};

export default InputLabeledPassword;
