import { HookFormPage } from 'pages/HookFormPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { UncontrolledFormPage } from 'pages/UncontrolledFormPage';
import { createBrowserRouter } from 'react-router-dom';
import { Paths } from 'shared/types/routerTypes';

export const router = createBrowserRouter([
  {
    path: Paths.main,
    element: <MainPage />,
    errorElement: <NotFound />,
  },
  {
    path: Paths.uncontrolledForm,
    element: <UncontrolledFormPage />,
  },
  {
    path: Paths.hookForm,
    element: <HookFormPage />,
  },
]);
