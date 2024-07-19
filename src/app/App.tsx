import { FC } from 'react';
import { StoreProvider } from './providers/storeProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/routerProvider';
import { ErrorBoundary } from './providers/errorBoundary';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ErrorBoundary>
  );
};
