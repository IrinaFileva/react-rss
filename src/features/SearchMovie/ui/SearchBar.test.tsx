import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { KEY_LS } from 'shared/constants';
import { Provider } from 'react-redux';
import { store } from 'app/providers/storeProvider';
import userEvent from '@testing-library/user-event';

describe('testing SearchBar', () => {
  const testLSValue = 'testValue';

  render(
    <BrowserRouter>
      <Provider store={store}>
        <SearchBar
          onClickCheck={() => localStorage.setItem(KEY_LS, testLSValue)}
        />
      </Provider>
    </BrowserRouter>
  );

  test('testing saving value to local storage', async () => {
    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton);
    const currentLSValue = localStorage.getItem(KEY_LS);
    const searchInput = screen.getByPlaceholderText('Enter the movie title');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, testLSValue);
    expect(currentLSValue).toEqual(testLSValue);
  });
});
