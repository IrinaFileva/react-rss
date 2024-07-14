import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/routerProvider';
import { ErrorBoundary } from 'shared/lib/ui/ErrorBoundary';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
