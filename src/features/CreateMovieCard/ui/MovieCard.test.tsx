import { MovieCard } from './MovieCard';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/providers/storeProvider/config/store';
import { testMovie } from 'shared/test';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { Paths } from 'shared/types';

describe('testing Card', () => {
  mockRouter.push(Paths.startPath);

  it('testing incoming data', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <MovieCard movie={testMovie} />
      </Provider>
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
      <Provider store={store}>
        <MovieCard movie={testMovie} />
      </Provider>
    );

    const card = getByTestId(testMovie.imdbID);
    expect(card).toBeInTheDocument();

    await userEvent.click(card);

    expect(mockRouter).toMatchObject({
      pathname: Paths.basePath,
      query: {
        page: ['1', Paths.detailsParams, testMovie.imdbID],
      },
    });
  });

  it('testing feature selection', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MovieCard movie={testMovie} />
      </Provider>
    );
    const input = getByRole('checkbox');
    expect(input).toBeInTheDocument();

    act(() => input.click());
    expect(input).toBeChecked();

    act(() => input.click());
    expect(input).not.toBeChecked();
  });
});
