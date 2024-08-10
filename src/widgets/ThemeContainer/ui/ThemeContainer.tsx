'use client';
import { FC, ReactNode } from 'react';
import { useTheme } from 'shared/lib/hooks';
import styles from './ThemeContainer.module.css';
import { Header } from 'widgets/Header';
import { SelectedMoviesModal } from 'features/UseSelectedMovies';

interface ThemeContainerProps {
  children: ReactNode;
}

export const ThemeContainer: FC<ThemeContainerProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.mainPage} ${styles[theme]}`}>
      <Header />
      {children}
      <SelectedMoviesModal />
    </div>
  );
};
