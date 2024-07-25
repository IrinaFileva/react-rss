import { type ReactNode, useMemo, useState } from 'react';
import { KEY_LS_THEME } from 'shared/constants';
import { Theme, ThemeContext } from 'shared/lib/theme';

const defaultTheme =
  (localStorage.getItem(KEY_LS_THEME) as Theme) || Theme.DARK;

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}
