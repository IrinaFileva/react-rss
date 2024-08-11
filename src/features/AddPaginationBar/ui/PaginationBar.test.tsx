import { act, render } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { PaginationBar } from './PaginationBar';
import userEvent from '@testing-library/user-event';
import { SearchBar } from 'features/SearchMovie';

const testTotalCount = '500';
const activePage = 1;
const page1 = '/search/1';
const page2 = '/search/2';

describe('testing Pagination Bar', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing buttons pagination', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <SearchBar />
        <PaginationBar totalResults={testTotalCount} activePage={activePage} />
      </BrowserRouter>
    );

    const firstItem = getByText(1);
    const secondItem = getByText(2);

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();

    await userEvent.click(secondItem);
    expect(location.pathname).toBe(page2);

    await userEvent.click(firstItem);
    expect(location.pathname).toBe(page1);

    const prevButton = getByText('< prev 10');
    const nextButton = getByText('next 10 >');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    act(() => nextButton.click());
    expect(prevButton).not.toBeDisabled();

    act(() => prevButton.click());
    expect(nextButton).not.toBeDisabled();
  });
});
