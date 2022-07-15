/* eslint-disable import/export */
import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

const customRender = (ui: ReactElement, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => {
      return <HelmetProvider>{children}</HelmetProvider>;
    },
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
