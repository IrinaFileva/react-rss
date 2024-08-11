import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import { store } from 'core/providers/storeProvider';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('testing SearchBar', () => {
  const testLSValue = 'testValue';

  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchBar />
      </Provider>
    </MemoryRouter>
  );

  test('testing saving value to local storage', async () => {
    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton);
    const searchInput = screen.getByPlaceholderText('Enter the movie title');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, testLSValue);
  });
});
