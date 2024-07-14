import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PaginationBar } from './PaginationBar';
import userEvent from '@testing-library/user-event';

const testTotalCount = '50';
const activePage = 1;
const page1 = '/search/1';
const page2 = '/search/2';

test('testing Pagination', async () => {
  const { getByText } = render(
    <BrowserRouter>
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
});
