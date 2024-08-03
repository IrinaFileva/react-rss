import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { Paths } from 'shared/types';

const testValue = 'testValue';

describe('testing SearchBar', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing useRouter hook', async () => {
    mockRouter.push(Paths.startPath);

    render(<SearchBar />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Enter the movie title');
    expect(searchInput).toBeInTheDocument();

    await userEvent.type(searchInput, testValue);
    await userEvent.click(button);

    expect(mockRouter).toMatchObject({
      pathname: Paths.basePath,
      query: {
        search: testValue,
        page: ['1'],
      },
    });

    await userEvent.clear(searchInput);
    await userEvent.click(button);

    expect(mockRouter).toMatchObject({
      pathname: Paths.basePath,
      query: {
        search: Paths.searchParams,
        page: ['1'],
      },
    });
  });
});
