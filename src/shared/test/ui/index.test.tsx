import { render } from '@testing-library/react';
import { testMovieById, testMoviesResponseById } from '../mockData';
import MainPage, { getServerSideProps } from 'pages/[search]/[[...page]]';
import { Context } from 'vm';
import { StoreProvider } from 'app/providers/storeProvider';
import { BASE_URL } from 'shared/constants';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const mockCxt: Context = {
  params: {
    search: 'men',
    page: ['12', '', undefined],
  },
};

const notId = http.get(`${BASE_URL}&s=Men&page=12`, async () => {
  return HttpResponse.json(testMoviesResponseById);
});

const withId = http.get(`${BASE_URL}&i=tt1285016&plot=short`, async () => {
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

it('testing display page', async () => {
  const { getByText } = render(
    <StoreProvider>
      <MainPage {...testMoviesResponseById} />
    </StoreProvider>
  );

  const text = getByText(/Search/);
  expect(text).toBeInTheDocument();

  server.use(notId, withId);

  const result = await getServerSideProps(mockCxt);
  expect(result.props).toStrictEqual(testMoviesResponseById);

  const button = getByText(/Close/);
  expect(button).toBeInTheDocument();
});
