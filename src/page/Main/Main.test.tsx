import { act, render, renderHook } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './Main';
import { Provider } from 'react-redux';
import { store } from 'app/providers/storeProvider';
import { KEY_LS } from 'shared/constants';
import { useLocalStorage } from 'shared/lib/hooks';
import userEvent from '@testing-library/user-event';

describe('testing Main Page', () => {
  const testLSPrev = 'prev';
  const testLSNew = 'new';

  it('testing props Search Bar', async () => {
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
