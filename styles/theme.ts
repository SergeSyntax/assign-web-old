import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

export const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      htmlFontSize: 10,
      fontSize: 16,
      h4: {
        fontSize: '5rem',
        letterSpacing: '.1rem',
        fontWeight: 500,
      },
      h6: {
        fontWeight: 600,
        fontSize: '2rem',
      },
      button: {
        letterSpacing: '.1rem',
        fontWeight: 600,
        textTransform: 'capitalize',
      },
    },
    overrides: {
      MuiBackdrop: {
        root: {
          backgroundColor: 'rgba(9, 30, 66, 0.54)',
        },
      },
    },
  })
);
