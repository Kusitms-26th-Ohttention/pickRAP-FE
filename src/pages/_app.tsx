import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ComponentProps } from 'react';
import { useCallback } from 'react';
import type { MutableSnapshot } from 'recoil';
import { RecoilRoot } from 'recoil';

import QueryClientProvider from '@/application/queryClient';
import { userAuthState } from '@/application/store/user/userAuth';
import { ToastPortal, ToastProvider } from '@/components/common/Toast';
import AppLayout from '@/containers/AppLayout';
import ErrorBoundary from '@/containers/ErrorBoundary/ErrorBoundary';
import ErrorPage from '@/containers/ErrorBoundary/ErrorPage';
import { getAccessToken } from '@/infra/api';
import { GlobalStyle, theme } from '@/styles';

type PageProps = {
  hydrateState: ComponentProps<typeof QueryClientProvider>['hydrateState'];
};

const App = ({ Component, pageProps }: AppProps<PageProps>) => {
  const recoilInitializer = useCallback(({ set }: MutableSnapshot) => {
    const token = getAccessToken();
    if (token) {
      set(userAuthState, { isLogin: true });
    }
  }, []);

  return (
    <>
      <Head>
        <title>피크랩 | pickRAP</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1.0, user-scalable=0,viewport-fit=cover"
        />
      </Head>
      <QueryClientProvider hydrateState={pageProps.hydrateState}>
        <RecoilRoot initializeState={recoilInitializer}>
          <ToastProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <AppLayout blackBackground={['/']}>
                <ErrorBoundary fallback={ErrorPage}>
                  <Component {...pageProps} />
                </ErrorBoundary>
              </AppLayout>
              <ToastPortal />
            </ThemeProvider>
          </ToastProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
