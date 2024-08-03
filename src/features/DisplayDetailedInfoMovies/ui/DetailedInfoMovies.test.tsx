import { StoreProvider } from 'app/providers/storeProvider';
import { DetailedInfoMovies } from './DetailedInfoMovies';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { testMovieById } from 'shared/test';
import { Paths } from 'shared/types';

describe('testing CardList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing incoming data and routing', async () => {
    mockRouter.push(Paths.startPath);

    const { getByText, getByAltText, getByRole } = render(
      <StoreProvider>
        <DetailedInfoMovies movie={testMovieById} />
      </StoreProvider>
    );

    const title = getByText(testMovieById.Title);
    expect(title).toBeInTheDocument();

    const poster = getByAltText(testMovieById.Poster);
    expect(poster).toBeInTheDocument();

    const year = getByText(testMovieById.Year);
    expect(year).toBeInTheDocument();

    const type = getByText(testMovieById.Type);
    expect(type).toBeInTheDocument();

    const plot = getByText(testMovieById.Plot);
    expect(plot).toBeInTheDocument();

    const actors = getByText(testMovieById.Actors);
    expect(actors).toBeInTheDocument();

    const director = getByText(testMovieById.Director);
    expect(director).toBeInTheDocument();

    const button = getByRole('button');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(mockRouter).toMatchObject({
      query: {
        page: ['1'],
      },
    });
  });
});
