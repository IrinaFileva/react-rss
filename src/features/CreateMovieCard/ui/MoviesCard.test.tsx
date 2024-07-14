import { BrowserRouter } from 'react-router-dom';
import { MovieCard } from './MovieCard';
import { render } from '@testing-library/react';
import { Movie } from 'shared/types';
import userEvent from '@testing-library/user-event';

const testMovie: Movie = {
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
  Title: 'Super Men',
  Type: 'movie',
  Year: 1978,
  imdbID: '123456',
};

describe('testing Card', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing incoming data', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <MovieCard movie={testMovie} />
      </BrowserRouter>
    );
    const title = getByText(testMovie.Title);
    expect(title).toBeInTheDocument();

    const poster = getByAltText(testMovie.Poster);
    expect(poster).toBeInTheDocument();

    const typeYear = getByText(`${testMovie.Type} ${testMovie.Year}`);
    expect(typeYear).toBeInTheDocument();
  });

  it('testing clicking card opens a detailed card component', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MovieCard movie={testMovie} />
      </BrowserRouter>
    );

    const card = getByTestId('123456');
    expect(card).toBeInTheDocument();
    await userEvent.click(card);
    const url = `/details/${testMovie.imdbID}`;
    expect(location.pathname).toBe(url);
  });
});
