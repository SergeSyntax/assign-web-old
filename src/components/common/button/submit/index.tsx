import React from 'react';
import { ButtonProps } from '@material-ui/core';
import { ButtonMaterial } from './material';
import { ProgressCircular } from './progress-circular';

interface Props extends ButtonProps {
  inProgress: boolean;
  text?: string;
}

const SubmitButton: React.FC<Props> = ({ text = 'Submit', inProgress, ...rest }) => {
  return (
    <ButtonMaterial
      variant="contained"
      color="primary"
      type="submit"
      disabled={inProgress}
      {...rest}
    >
      {inProgress ? <ProgressCircular size="2.4rem" /> : text}
    </ButtonMaterial>
  );
};

export default SubmitButton;
