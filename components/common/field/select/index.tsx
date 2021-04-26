import { FieldProps, getIn } from 'formik';
import { FormControl, MenuItem } from '@material-ui/core';
import { Select as SelectMUI } from '@material-ui/core';
import { FormHelperText } from './form-helper-text.style';

export const SelectField: React.FC<FieldProps<string>> = props => {
  const { field, form, ...rest } = props;
  const { name } = field;
  const isError = getIn(form.errors, name) && getIn(form.touched, name);
  const getErrorMessage = getIn(form.errors, name);

  return (
    <FormControl error={isError}>
      {/* <InputLabel id="demo-simple-select-error-label">{name}</InputLabel> */}
      <SelectMUI {...field} {...rest} variant="outlined" fullWidth id={name}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </SelectMUI>
      <FormHelperText>{isError ? getErrorMessage : ' '}</FormHelperText>
    </FormControl>
  );
};
