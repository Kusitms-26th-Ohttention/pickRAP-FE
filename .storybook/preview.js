import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyle, theme } from '../src/styles';
import { ThemeProvider } from '@emotion/react';
import { Story } from '@storybook/react';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

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
