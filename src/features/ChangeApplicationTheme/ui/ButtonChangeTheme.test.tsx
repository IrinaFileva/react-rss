import { ThemeProvider } from 'core/providers/themeProvider';
import { act } from 'react';
import { ButtonTheme } from './ButtonChangeTheme';
import { render } from '@testing-library/react';
import { Theme } from 'shared/lib/theme';

describe('testing ButtonTheme', () => {
  it('testing toggle theme', () => {
    const { getByRole, getByTestId } = render(
      <ThemeProvider>
        <ButtonTheme />
      </ThemeProvider>
    );
    const input = getByRole('checkbox');
    const theme = getByTestId(Theme.DARK);
    expect(theme).toBeInTheDocument();

    expect(input).not.toBeChecked();

    act(() => input.click());

    const themeLight = getByTestId(Theme.LIGHT);
    expect(themeLight).toBeInTheDocument();

    expect(input).toBeChecked();
  });
});
