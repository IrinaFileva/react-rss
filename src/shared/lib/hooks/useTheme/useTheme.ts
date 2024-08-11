import { useContext } from 'react';
import { Theme, ThemeContext } from 'shared/lib/theme';

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
  };

  return {
    theme: theme || Theme.DARK,
    toggleTheme,
  };
};
