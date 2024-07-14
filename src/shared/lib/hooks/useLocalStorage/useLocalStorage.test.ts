import { KEY_LS } from 'shared/constants';
import { useLocalStorage } from './useLocalStorage';
import { renderHook, waitFor } from '@testing-library/react';

const data = '';

const newData = 'new data';

beforeAll(() => {
  localStorage.setItem(KEY_LS, data);
});

describe('use search hook', () => {
  it('testing custom hook ', async () => {
    const { result } = renderHook(() => useLocalStorage());
    const searchValue = result.current[0];
    expect(searchValue).toBe(data);
    const updateSearchValue = result.current[1];
    await waitFor(() => {
      updateSearchValue(newData);
    });
    expect(localStorage.getItem(KEY_LS)).toBe(newData);
  });
});
