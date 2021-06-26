import { styled } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle as MuiDialogTitle,
  IconButton,
  MenuItem,
  Typography,
} from '@material-ui/core';

import SubmitButton from 'src/components/common/button/submit';
import { TextButton } from 'src/components/common/button/text';
import { SelectValue } from 'src/components/common/field/select';
import { LabeledSelectField } from 'src/components/common/field/select-labled';
import { LabeledTextField } from 'src/components/common/field/text-labled';
import { Form, Formik } from 'formik';
import React, { Fragment, ForwardRefRenderFunction } from 'react';
import { BiLayerPlus } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { TiTag } from 'react-icons/ti';
import * as Yup from 'yup';

interface Props {
  onClick: () => void;
}

const DialogWrapper = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    max-width: 35rem;
    width: 100%;
  }
`;

const DialogHeader = styled(MuiDialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.MuiDialogTitle-root {
    padding-right: 1.2rem;
  }
`;

const CloseButton = styled(IconButton)`
  && {
    padding: 0.5rem;
  }
`;

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1).max(255).required(),
  accessibility: Yup.string().required().oneOf(['private', 'public', 'team']),
});

interface FormValues {
  title: string;
  accessibility: string;
}

const user: FormValues = {
  title: '',
  accessibility: 'public',
};

const values: SelectValue[] = [
  { key: 'private', value: 'private' },
  { key: 'public', value: 'public' },
  { key: 'team', value: 'team' },
];

const CreateProject: ForwardRefRenderFunction<Element, Props> = ({ onClick }, ref) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    onClick();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabPropagation: React.KeyboardEventHandler<HTMLDivElement> | undefined = event => {
    if (event.key === 'Tab') {
      event.stopPropagation();
    }
  };

  return (
    <Fragment>
      <MenuItem innerRef={ref} onClick={handleClickOpen}>
        <BiLayerPlus /> New Project
      </MenuItem>

      <DialogWrapper
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        onKeyDown={handleTabPropagation}
      >
        <DialogHeader disableTypography>
          <Typography variant="h6">Create Project</Typography>
          <CloseButton aria-label="close" onClick={handleClose}>
            <MdClose />
          </CloseButton>
        </DialogHeader>
        <DialogContent>
          <Formik<FormValues>
            validationSchema={validationSchema}
            initialValues={user}
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
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
        <DialogActions>
          <TextButton onClick={handleClose}>cancel</TextButton>

          <SubmitButton inProgress={false} text="create" />
        </DialogActions>
      </DialogWrapper>
    </Fragment>
  );
};

export default React.forwardRef(CreateProject);
