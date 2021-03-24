import { AppProps } from 'next/app';
import React, { Fragment, ReactElement } from 'react';
import Head from 'next/head';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { global } from '../styles/global';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        {/* VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Assign</title>
        <meta
          name="description"
          content="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
        />
      </Head>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <Global styles={global} />
          <CssBaseline />
          {/* Use also the ThemeProvider for Styled-Components so //you can access the theme in your own css */}
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Fragment>
  );
}

export default MyApp;
