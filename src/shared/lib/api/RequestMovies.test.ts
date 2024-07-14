import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'shared/constants';
import { Movie, MovieResponse } from 'shared/types';
import { requestMovies } from './RequestMovies';

const mockpage = 12;

const mockTitle = 'Men';

const testMovie: Movie = {
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
  Title: 'Super Men',
  Type: 'movie',
  Year: 1978,
  imdbID: '123456',
};

const testMovies: Movie[] = new Array(10).fill(testMovie);

const testMoviesResponse: MovieResponse = {
  Search: testMovies,
  totalResults: '300',
};

const handlers = [
  http.get(`${BASE_URL}&s=${mockTitle}&page=${mockpage}`, async () => {
    return HttpResponse.json(testMoviesResponse);
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
  const result = await requestMovies(mockTitle, mockpage);
  expect(result).toEqual(testMoviesResponse);
});
