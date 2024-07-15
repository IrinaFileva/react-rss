import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/routerProvider';
import { ErrorBoundary } from './providers/errorBoundary';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
