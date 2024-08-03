import { render } from '@testing-library/react';
import { testMovies } from '../mockData';
import { MovieById, MovieResponse } from 'shared/types';
import { Context } from 'vm';
import MainPage, { getServerSideProps } from 'pages/[search]/[[...page]]';
import { StoreProvider } from 'app/providers/storeProvider';
import { BASE_URL } from 'shared/constants';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const mockData: MovieById = {
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
  Title: 'Super Men',
  Type: 'movie',
  Year: '1978',
  Actors: 'Ivan',
  Director: 'Vova',
  Plot: 'Super',
};

const testMoviesResponse: MovieResponse = {
  Search: testMovies,
  totalResults: '300',
  movieById: mockData,
};

const mockCxt: Context = {
  params: {
    search: 'men',
    page: ['12', '', undefined],
  },
};

const notId = http.get(`${BASE_URL}&s=Men&page=12`, async () => {
  return HttpResponse.json(testMoviesResponse);
});

const withId = http.get(`${BASE_URL}&i=tt1285016&plot=short`, async () => {
  return HttpResponse.json(mockData);
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
      <MainPage {...testMoviesResponse} />
    </StoreProvider>
  );

  const text = getByText(/Search/);
  expect(text).toBeInTheDocument();

  server.use(notId, withId);

  const result = await getServerSideProps(mockCxt);
  expect(result.props).toStrictEqual(testMoviesResponse);

  const button = getByText(/Close/);
  expect(button).toBeInTheDocument();
});
