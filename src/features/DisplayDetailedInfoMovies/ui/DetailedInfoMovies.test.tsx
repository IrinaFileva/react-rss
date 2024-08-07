import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StoreProvider from 'app/StoreProvider';
import mockRouter from 'next-router-mock';
import { testMovieById } from 'shared/test';
import DetailedInfoMovies from './DetailedInfoMovies';

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('next/navigation')>();
  const { useRouter } =
    await vi.importActual<typeof import('next-router-mock')>(
      'next-router-mock'
    );
  const useParams = vi.fn().mockImplementation(() => {
    return {
      search: 'search',
      page: ['1', 'details', '123456'],
    };
  });
  return {
    ...actual,
    useRouter: vi.fn().mockImplementation(useRouter),
    useParams,
  };
});

describe('testing CardList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing incoming data and routing', async () => {
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
      pathname: `/search/1`,
    });
  });
});
