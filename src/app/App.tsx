import { FC } from 'react';
import { StoreProvider } from './providers/storeProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/routerProvider';
import { ErrorBoundary } from './providers/errorBoundary';
import { ThemeProvider } from './providers/themeProvider';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};
