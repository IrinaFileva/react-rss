import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { requestMoviesById } from './RequestMovieById';
import { mockPathRequest, testMovieById } from 'shared/test';

const mockId = 'tt1285016';

const handler = http.get(mockPathRequest, ({ request }) => {
  new URL(request.url).searchParams;
  return HttpResponse.json(testMovieById);
});

const server = setupServer(handler);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

test('testing getPageCount', async () => {
  const result = await requestMoviesById(mockId);
  expect(result).toEqual(testMovieById);
});
