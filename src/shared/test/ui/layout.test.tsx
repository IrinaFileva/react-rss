import { render } from '@testing-library/react';
import { SearchBar } from 'features/SearchMovie';
import RootLayout from 'app/layout';

it('testing RootLayout', () => {
  const { getByText } = render(
    <RootLayout>
      <SearchBar />
    </RootLayout>
  );
  const text = getByText('Movies');
  expect(text).toBeInTheDocument();
});
