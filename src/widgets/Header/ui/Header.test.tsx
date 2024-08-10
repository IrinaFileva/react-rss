import { render } from '@testing-library/react';
import { Header } from './Header';
import mockRouter from 'next-router-mock';
import { Paths } from 'shared/types';

it('testing RootLayout', () => {
  mockRouter.push('search/1');
  const { getByText } = render(<Header />);
  const text = getByText('Movies');
  expect(text).toBeInTheDocument();
  expect(mockRouter).toMatchObject({
    pathname: Paths.startPath,
  });
});
