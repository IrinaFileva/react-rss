import { render, screen, waitFor } from '@testing-library/react';
import { MovieResponse } from 'shared/types';
import { MovieCardList } from './MoviesCardList';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'app/providers/storeProvider/config/store';
import { Provider } from 'react-redux';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'shared/constants';
import { testMovies } from 'shared/test';

const mockPage = 1;
const testRequest: string = 'new';

const testMoviesResponse: MovieResponse = {
  Search: testMovies,
  totalResults: '300',
};

const responseError = { Error: 'Movie not found!' };

const requestError = 'ewjrjdi';

const successResponse = http.get(
  `${BASE_URL}&s=${testRequest}&page=${mockPage}`,
  async () => {
    return HttpResponse.json(testMoviesResponse);
  }
);

const errorResponse = http.get(
  `${BASE_URL}&s=${requestError}&page=${mockPage}`,
  async () => {
    return HttpResponse.json(responseError);
  }
);

const server = setupServer();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('testing CardList', () => {
  it('testing the number of cards, should be 10', async () => {
    server.use(successResponse);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieCardList request={testRequest} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByText('Super Men')).toHaveLength(10);
    });
  });

  it('testing error', async () => {
    server.use(errorResponse);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieCardList request={requestError} />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Movie not found!')).toBeInTheDocument();
    });
  });
});
