import { render, screen, waitFor } from '@testing-library/react';
import { MovieResponse } from 'shared/types';
import { store } from 'core/providers/storeProvider/config/store';
import { Provider } from 'react-redux';
import { testMovies, testResponseError } from 'shared/test';
import { createRemixStub } from '@remix-run/testing';
import MainPage, { loader } from 'app/routes/$search.$page';

const testMoviesResponse: MovieResponse = {
  Search: testMovies,
  totalResults: '300',
};

const MockMainPage = createRemixStub([
  {
    path: '/search/1',
    Component: MainPage,
    loader(): Awaited<ReturnType<typeof loader>> {
      return testMoviesResponse;
    },
  },
]);

const MockMainPageNotFound = createRemixStub([
  {
    path: '/search/1',
    Component: MainPage,
    loader(): Awaited<ReturnType<typeof loader>> {
      return testResponseError;
    },
  },
]);

describe('testing CardList if movie not found', () => {
  it('testing item', async () => {
    render(
      <Provider store={store}>
        <MockMainPage initialEntries={['/search/1']} />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getAllByText('Super Men')).toHaveLength(10);
    });
  });

  it('testing error', async () => {
    render(
      <Provider store={store}>
        <MockMainPageNotFound initialEntries={['/search/1']} />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/Oops/)).toBeInTheDocument();
    });
  });
});
