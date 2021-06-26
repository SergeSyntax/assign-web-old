import React, { Fragment, ReactElement } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { theme } from '../styles/theme';

import { AppProps } from 'next/app';

import { wrapper } from 'src/store';

import ServerAlert from 'src/components/alert';
import { global } from '../styles/global';
import { Global } from '@emotion/react';

const cache = createCache({ key: 'css' });
cache.compat = true;

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
      <CacheProvider value={cache}>
        <Head>
          {/* VIEWPORT */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* <StylesProvider injectFirst> */}
        {/* <MuiThemeProvider theme={theme}> */}
        <Global styles={global} />
        <CssBaseline />
        {/* Use also the ThemeProvider for Styled-Components so //you can access the theme in your own css */}
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ServerAlert />
        </ThemeProvider>
        {/* </MuiThemeProvider>
      </StylesProvider> */}
      </CacheProvider>
    </Fragment>
  );
}

MyApp.prototype = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
