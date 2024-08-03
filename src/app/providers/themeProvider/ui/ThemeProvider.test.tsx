import { render } from '@testing-library/react';
import { SearchBar } from 'features/SearchMovie';
import { ThemeProvider } from './ThemeProvider';

describe('testing ThemeProvider', () => {
  it('testing children', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <SearchBar />
      </ThemeProvider>
    );

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
