import React from 'react';
import Snackbar, { SnackbarCloseReason } from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
  // Button,
  IconButton,
} from '@material-ui/core';
import { GoX } from 'react-icons/go';
import { useActions, useStoreState } from 'store/hooks';

type HandleClose = (event: React.SyntheticEvent<unknown>, reason?: SnackbarCloseReason) => void;

const ServerAlert: React.FC = () => {
  const { clearAlert } = useActions();
  const message = useStoreState(state => state.alert.message);
  const relevant = useStoreState(state => state.alert.relevant);
  const error = useStoreState(state => state.alert.error);

  const handleClose: HandleClose = (event, reason) => {
    if (reason && reason === 'clickaway') return;
    clearAlert();
  };

  return (
    <Snackbar
      message={message}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      open={relevant}
      autoHideDuration={error ? 6000 : 1000}
      onClose={handleClose}
      action={
        error ? null : (
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" color="inherit" onClick={handleClose}>
              <GoX fontSize="small" />

              {/* <CloseIcon fontSize="small" /> */}
            </IconButton>
          </React.Fragment>
        )
      }
    >
      <MuiAlert elevation={4} variant="filled" severity="error" onClose={handleClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default ServerAlert;
