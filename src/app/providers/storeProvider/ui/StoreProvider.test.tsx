import { render } from '@testing-library/react';
import { SearchBar } from 'features/SearchMovie';
import { StoreProvider } from './StoreProvider';

describe('testing storeProvider', () => {
  it('testing children', () => {
    const { getByRole } = render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>
    );

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
