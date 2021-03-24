import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

export const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      htmlFontSize: 10,
      fontSize: 18,
      h4: {
        fontSize: '5rem',
        letterSpacing: '.1rem',
        fontWeight: 500,
      },
      button: {
        letterSpacing: '.1rem',
        fontWeight: 600,
        textTransform: 'capitalize',
      },
    },
  })
);
