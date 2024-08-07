import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { testMoviesResponseById, testResponseError } from 'shared/test';
import StoreProvider from 'app/StoreProvider';
import mockRouter from 'next-router-mock';
import MovieCardList from './MoviesCardList';

describe('testing CardList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing the number of cards, should be 10', async () => {
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
      pathname: '/search/1',
    });
  });

  it('testing messages when cards are missing', () => {
    const { getByText } = render(<MovieCardList data={testResponseError} />);

    const text = getByText(/Oops/);
    expect(text).toBeInTheDocument();
  });
});
