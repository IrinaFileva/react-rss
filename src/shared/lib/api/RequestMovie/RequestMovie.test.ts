import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { requestMovies } from './RequestMovie';
import {
  mockPathRequest,
  testMovieById,
  testMoviesResponse,
} from 'shared/test';

const mockPage = 12;

const mockTitle = 'Men';

const notId = http.get(mockPathRequest, ({ request }) => {
  new URL(request.url).searchParams;
  return HttpResponse.json(testMoviesResponse);
});

const withId = http.get(mockPathRequest, ({ request }) => {
  new URL(request.url).searchParams;
  return HttpResponse.json(testMovieById);
});

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
  server.use(withId);
  await requestMovies(mockTitle, mockPage);
});
