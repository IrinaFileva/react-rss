import { MovieCard } from './MovieCard';
import { act, render } from '@testing-library/react';
import { testMovie } from 'shared/test';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import StoreProvider from 'app/StoreProvider';

describe('testing Card', () => {
  it('testing incoming data', () => {
    const { getByText, getByAltText } = render(
      <StoreProvider>
        <MovieCard movie={testMovie} />
      </StoreProvider>
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
      <StoreProvider>
        <MovieCard movie={testMovie} />
      </StoreProvider>
    );

    const card = getByTestId(testMovie.imdbID);
    expect(card).toBeInTheDocument();

    await userEvent.click(card);
    expect(mockRouter).toMatchObject({
      pathname: `/search/1/details/${testMovie.imdbID}`,
    });
  });
});

it('testing feature selection', () => {
  const { getByRole } = render(
    <StoreProvider>
      <MovieCard movie={testMovie} />
    </StoreProvider>
  );
  const input = getByRole('checkbox');
  expect(input).toBeInTheDocument();

  act(() => input.click());
  expect(input).toBeChecked();

  act(() => input.click());
  expect(input).not.toBeChecked();
});
