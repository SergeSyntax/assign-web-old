import { TextField } from '@material-ui/core';
import React, { Fragment } from 'react';
import { IconType } from 'react-icons/lib';
import { Label } from './label/Label';

interface Props {
  icon: IconType;
  name: string;
  placeholder: string;
  type?: string;
  helperText?: string;
}

export const LabeledField: React.FC<Props> = ({ icon, name, placeholder, type, helperText }) => {
  return (
    <Fragment>
      <Label icon={icon} htmlFor={name} value={name} />
      <TextField
        variant="outlined"
        style={{ marginBottom: '0.5rem' }}
        // variant="outlined"
        helperText={helperText ? helperText : ' '}
        // error
        name={name}
        id={name}
        size="medium"
        placeholder={placeholder}
        type={type}
        fullWidth
      />
    </Fragment>
  );
};
