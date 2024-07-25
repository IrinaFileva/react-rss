import { useContext } from 'react';
import { Theme, ThemeContext } from '../../theme/themeContext';
import { KEY_LS_THEME } from 'shared/constants';

type UseThemeResult = {
  toggleTheme: () => void;
  theme: Theme;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.DARK;
    }
    if (setTheme) setTheme(newTheme);
    localStorage.setItem(KEY_LS_THEME, newTheme);
  };

  return {
    theme: theme || Theme.DARK,
    toggleTheme,
  };
};
