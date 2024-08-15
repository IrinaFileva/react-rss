import { HookFormPage } from 'pages/HookFormPage';
import { Layout } from 'pages/Layout';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { UncontrolledFormPage } from 'pages/UncontrolledFormPage';
import { createBrowserRouter } from 'react-router-dom';
import { Paths } from 'shared/types/routerTypes';

export const router = createBrowserRouter([
  {
    path: Paths.start,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: Paths.main,
        element: <MainPage />,
      },
      {
        path: Paths.uncontrolledForm,
        element: <UncontrolledFormPage />,
      },
      {
        path: Paths.hookForm,
        element: <HookFormPage />,
      },
    ],
  },
]);
