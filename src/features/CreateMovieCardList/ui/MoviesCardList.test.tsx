import { render } from '@testing-library/react';
import { MovieCardList } from './MoviesCardList';
import { StoreProvider } from 'app/providers/storeProvider';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { testMoviesResponseById, testResponseError } from 'shared/test';
import { Paths } from 'shared/types';

describe('testing CardList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing the number of cards, should be 10', async () => {
    mockRouter.push(Paths.startPath);

    const { getAllByRole, getByTestId } = render(
      <StoreProvider>
        <MovieCardList data={testMoviesResponseById} />
      </StoreProvider>
    );

    const imgCount = getAllByRole('img');
    expect(imgCount).toHaveLength(10);

    const div = getByTestId('list');
    expect(div).toBeInTheDocument();

    await userEvent.click(div);
    expect(mockRouter).toMatchObject({
      query: {
        page: ['1'],
      },
    });
  });

  it('testing messages when cards are missing', () => {
    const { getByText } = render(
      <StoreProvider>
        <MovieCardList data={testResponseError} />
      </StoreProvider>
    );

    const text = getByText(/Oops/);
    expect(text).toBeInTheDocument();
  });
});
