import { act, render } from '@testing-library/react';
import { vi } from 'vitest';
import { PaginationBar } from './PaginationBar';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { Paths } from 'shared/types';

const testTotalCount = '500';

describe('testing Pagination Bar', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing buttons pagination', async () => {
    mockRouter.push(Paths.startPath);
    const { getByText } = render(
      <PaginationBar totalResults={testTotalCount} />
    );

    const firstItem = getByText(1);
    const secondItem = getByText(2);

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();

    await userEvent.click(secondItem);
    expect(mockRouter).toMatchObject({
      query: {
        page: ['2'],
      },
    });

    await userEvent.click(firstItem);
    expect(mockRouter).toMatchObject({
      query: {
        page: ['1'],
      },
    });
  });

  it('testing prev and next buttons', () => {
    const { getByText } = render(
      <PaginationBar totalResults={testTotalCount} />
    );

    const prevButton = getByText('◄ prev 10');
    const nextButton = getByText('next 10 ►');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    act(() => nextButton.click());
    expect(prevButton).not.toBeDisabled();

    act(() => prevButton.click());
    expect(nextButton).not.toBeDisabled();
  });
});
