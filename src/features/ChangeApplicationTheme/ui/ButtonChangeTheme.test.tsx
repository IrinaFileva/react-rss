import { act, render } from '@testing-library/react';
import { ButtonTheme } from './ButtonChangeTheme';
import { ThemeProvider } from '_app/providers/themeProvider';
import { Theme } from 'shared/lib/theme';

describe('testing ButtonTheme', () => {
  it('testing toggle theme', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ButtonTheme />
      </ThemeProvider>
    );

    const inputDark = getByText(Theme.DARK);
    expect(inputDark).toBeInTheDocument();

    act(() => inputDark.click());

    const inputLight = getByText(Theme.LIGHT);
    expect(inputLight).toBeInTheDocument();

    act(() => inputDark.click());

    const input = getByText(Theme.DARK);
    expect(input).toBeInTheDocument();
  });
});
