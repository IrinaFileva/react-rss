import { createBrowserRouter } from 'react-router-dom';
import { Main } from 'page/Main/Main';
import { Layout } from 'page/Layout/Layout';
import { NotFound } from 'page/NotFound/NotFound';
import { OutletMovies } from 'features/DisplayOutletMovies';
import { Paths } from 'shared/types';

export const router = createBrowserRouter([
  {
    path: Paths.main,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: `${Paths.search}${Paths.page}`,
        element: <Main />,
        children: [
          {
            path: `${Paths.details}${Paths.id}`,
            element: <OutletMovies />,
          },
        ],
      },
    ],
  },
]);
