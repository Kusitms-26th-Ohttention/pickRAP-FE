import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import React from 'react';
// import { GlobalStyle } from '@/styles';
// import Layout from '@/components/Layout';
// import { Story } from '@storybook/react';
// import { ThemeProvider } from '@emotion/react';
// import theme from '@/styles/theme';

// Global decorator to apply the styles to all stories
// export const decorators = [
//   (Story) => (
//     <>
//       <GlobalStyle />
//       <ThemeProvider theme={theme}>
//         <Layout>
//           <Story />
//         </Layout>
//       </ThemeProvider>
//     </>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    a11y: {
      element: '#root',
      manual: false,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
