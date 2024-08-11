import { store } from 'core/providers/storeProvider';
import { Provider } from 'react-redux';
import { render, waitFor, screen } from '@testing-library/react';
import DetailsPage, { loader } from 'app/routes/$search.$page.details.$id';
import { createRemixStub } from '@remix-run/testing';
import { testMovieById } from 'shared/test';

const MockDetailsPage = createRemixStub([
  {
    path: '/search/1/details/tt1285016',
    Component: DetailsPage,
    loader(): Awaited<ReturnType<typeof loader>> {
      return testMovieById;
    },
  },
]);

describe('testing OutletMovies', () => {
  it('testing display data', async () => {
    render(
      <Provider store={store}>
        <MockDetailsPage initialEntries={['/search/1/details/tt1285016']} />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Super Men/)).toBeInTheDocument();
    });
  });
});
