import { store } from 'app/providers/storeProvider';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { BASE_URL } from 'shared/constants';
import { MovieById } from 'shared/types';
import { OutletMovies } from './OutletMovies';
import { render, waitFor, screen } from '@testing-library/react';

const mockId = 'tt1285016';

const mockData: MovieById = {
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
  Title: 'Super Men',
  Type: 'movie',
  Year: '1978',
  Actors: 'Ivan',
  Director: 'Vova',
  Plot: 'Super',
};

const handlers = [
  http.get(`${BASE_URL}&i=${mockId}&plot=short`, async () => {
    return HttpResponse.json(mockData);
  }),
];

const server = setupServer(...handlers);

describe('testing OutletMovies', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('testing display data', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <OutletMovies />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getAllByText('Super Men')).toHaveLength(1);
    });
  });
});
