import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'shared/constants';
import { requestMovies } from './RequestMovie';
import { testMovieById, testMoviesResponse } from 'shared/test';

const mockPage = '12';

const mockTitle = 'Men';

const mockId = 'tt1285016';

const notId = http.get(
  `${BASE_URL}&s=${mockTitle}&page=${mockPage}`,
  async () => {
    return HttpResponse.json(testMoviesResponse);
  }
);

const withId = [
  http.get(`${BASE_URL}&i=${mockId}&plot=short`, async () => {
    return HttpResponse.json(testMovieById);
  }),
];

const server = setupServer();

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
  vi.clearAllMocks();
});

test('testing requestMovies not id', async () => {
  server.use(notId);
  const result = await requestMovies(mockTitle, mockPage);
  expect(result).toEqual(testMoviesResponse);
});

test('testing requestMovies with id', async () => {
  server.use(...withId);
  await requestMovies(mockTitle, mockPage, mockId);
});
