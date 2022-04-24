import { motion } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { MobileNavBar } from '../components/MobileNavBar';
import { NavBar } from '../components/NavBar';
import { AuthGuard } from '../HOC/AuthGuard';
import { ReduxThemeProvider } from '../HOC/ReduxThemeProvider';
import { OnlineStatusProvider } from '../hooks/useOnlineStatus';
import store from '../redux/store';
import breakpoints from '../theme/breakpoints';
import { GlobalStyles } from '../theme/globalStyles';

export default function App({
  Component,
  router,
  pageProps: { session, status, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <OnlineStatusProvider>
        <Provider store={store}>
          <ReduxThemeProvider>
            <GlobalStyles />
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
            <Toaster position="bottom-right" reverseOrder={false} />
          </ReduxThemeProvider>
        </Provider>
      </OnlineStatusProvider>
    </SessionProvider>
  );
}
