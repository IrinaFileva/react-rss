import { createBrowserRouter } from 'react-router-dom';
import { Main } from 'page/Main/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/:page',
        element: <Main />,
      },
    ],
  },
]);
