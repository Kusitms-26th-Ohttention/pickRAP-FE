import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import AppLayout from '@/containers/AppLayout';
import { GlobalStyle, theme } from '@/styles';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
