import { TextField } from './text-field.style';
import { FieldProps, getIn } from 'formik';

export const TextInput: React.FC<FieldProps<string>> = props => {
  const { field, form, ...rest } = props;
  const { name } = field;
  const isError = getIn(form.errors, name) && getIn(form.touched, name);
  const getErrorMessage = getIn(form.errors, name);

  return (
    <TextField
      {...field}
      {...rest}
      variant="outlined"
      helperText={isError ? getErrorMessage : ' '}
      error={isError}
      id={name}
      size="medium"
      fullWidth
    />
  );
};
