import { ThemeProvider } from 'core/providers/themeProvider';
import { act } from 'react';
import { ButtonTheme } from './ButtonChangeTheme';
import { render } from '@testing-library/react';

describe('testing ButtonTheme', () => {
  it('testing toggle theme', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ButtonTheme />
      </ThemeProvider>
    );
    const input = getByRole('checkbox');

    expect(input).not.toBeChecked();

    act(() => input.click());

    expect(input).toBeChecked();
  });
});
