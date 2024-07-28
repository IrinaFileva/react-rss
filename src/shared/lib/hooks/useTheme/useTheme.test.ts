import { renderHook, waitFor } from '@testing-library/react';
import { Theme } from 'shared/lib/theme';
import { useTheme } from './useTheme';

it('testing custom hook ', async () => {
  const { result } = renderHook(() => useTheme());
  const { theme, toggleTheme } = result.current;
  await waitFor(() => {
    toggleTheme();
  });
  expect(Theme.DARK).toBe(theme);
});
