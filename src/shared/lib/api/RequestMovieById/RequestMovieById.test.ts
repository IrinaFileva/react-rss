import { MovieById } from 'shared/types';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { requestMoviesById } from './RequestMovieById';
import { BASE_URL } from 'shared/constants';

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

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

test('testing getPageCount', async () => {
  const result = await requestMoviesById(mockId);
  expect(result).toEqual(mockData);
});
