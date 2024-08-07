'use client';
import { useTheme } from 'shared/lib/hooks';
import { Paths } from 'shared/types';
import { SearchBar } from 'features/SearchMovie';
import { ButtonTheme } from 'features/ChangeApplicationTheme';
import { SelectedMoviesModal } from 'features/UseSelectedMovies';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './../_app/styles/main.module.css';

interface MainPageProps {
  children: React.ReactNode;
}

export default function MainPage({ children }: MainPageProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useParams();
  const isPage = params.page[0] === Paths.pageParams;

  useEffect(() => {
    if (isPage) router.push(Paths.startPath);
  }, [router, isPage]);

  return (
    <div className={`${styles.mainPage} ${styles[theme]}`}>
      <header className={styles.header}>
        <SearchBar />
        <ButtonTheme />
      </header>
      {children}
      <SelectedMoviesModal />
    </div>
  );
}
