import { useTheme } from 'shared/lib/hooks';
import { Theme } from 'shared/lib/theme';
import { FC } from 'react';
import styles from './ButtonChangeTheme.module.css';

export const ButtonTheme: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label id="switch" className={styles.switch}>
      <input
        type="checkbox"
        defaultChecked={theme === Theme.LIGHT ? true : false}
        onClick={() => {
          toggleTheme();
        }}
        id="slider"
      ></input>
      <span className={`${styles.slider} ${styles.round}`}>{theme}</span>
    </label>
  );
};
