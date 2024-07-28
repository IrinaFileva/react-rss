import { act, render, renderHook } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './Main';
import { Provider } from 'react-redux';
import { store } from 'app/providers/storeProvider';
import { KEY_LS } from 'shared/constants';
import { useLocalStorage } from 'shared/lib/hooks';
import userEvent from '@testing-library/user-event';

describe('testing Main Page', () => {
  it('testing testing base shape of main', async () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    );

    const title = getByText('Movies');
    expect(title).toBeInTheDocument();

    const btnTheme = getByTestId('btnTheme');
    expect(btnTheme).toBeInTheDocument();

    const loader = getByText('Loading...');
    expect(loader).toBeInTheDocument();
  });

  it('testing props Search Bar', async () => {
    const testLSPrev = 'prev';
    const testLSNew = 'new';
    localStorage.setItem(KEY_LS, testLSPrev);
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    );
    const { result } = renderHook(() => useLocalStorage());
    const [, setValue] = result.current;
    const button = getByText('Search');
    await userEvent.click(button);
    act(() => {
      setValue(testLSNew);
    });
    const currentLSValue = localStorage.getItem(KEY_LS);
    expect(currentLSValue).toBe(testLSNew);
  });
});
