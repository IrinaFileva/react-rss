import { Theme, useTheme } from 'app/providers/themeProvider';
import { FC } from 'react';
import './ButtonChangeTheme.css';

export const ButtonTheme: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label id="switch" className="switch">
      <input
        type="checkbox"
        checked={theme === Theme.LIGHT ? true : false}
        onChange={() => {
          toggleTheme();
        }}
        id="slider"
      ></input>
      <span className="slider round"></span>
    </label>
  );
};
