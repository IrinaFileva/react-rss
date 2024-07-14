import { render } from '@testing-library/react';
import { Movie, MovieResponse } from 'shared/types';
import { MovieCardList } from './MoviesCardList';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

const testEmptyData: MovieResponse = {
  Error: 'Oops',
};

const testLoading: boolean = false;

const testLoadingTrue: boolean = true;

const testActivePage = 4;

describe('testing CardList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing the number of cards, should be 10', async () => {
    const { getAllByRole, getByTestId } = render(
      <BrowserRouter>
        <MovieCardList
          isLoading={testLoading}
          data={testMoviesResponse}
          page={testActivePage}
        />
      </BrowserRouter>
    );
    const imgCount = getAllByRole('img');
    expect(imgCount).toHaveLength(10);

    const div = getByTestId('list');
    expect(div).toBeInTheDocument();
    await userEvent.click(div);
    const url = `/search/4`;
    expect(location.pathname).toBe(url);
  });

  it('testing messages when cards are missing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MovieCardList isLoading={testLoading} data={testEmptyData} page={0} />
      </BrowserRouter>
    );
    const text = getByText(/Oops/);
    expect(text).toBeInTheDocument();
  });

  it('testing messages when cards are missing', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <MovieCardList
          isLoading={testLoadingTrue}
          data={testMoviesResponse}
          page={testActivePage}
        />
      </BrowserRouter>
    );
    const text = getByText(/Loading.../);
    expect(text).toBeInTheDocument();
  });
});
