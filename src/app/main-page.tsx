'use client';
import { useTheme } from 'shared/lib/hooks';
import { MovieResponse, Paths } from 'shared/types';
import { SearchBar } from 'features/SearchMovie';
import { ButtonTheme } from 'features/ChangeApplicationTheme';
import { MovieCardList } from 'features/CreateMovieCardList';
import { DetailedInfoMovies } from 'features/DisplayDetailedInfoMovies';
import { SelectedMoviesModal } from 'features/UseSelectedMovies';
import { useParams, useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import styles from './../_app/styles/main.module.css';
import Loader from './loading';

export default function MainPage(data: MovieResponse) {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useParams();
  const isPage = params.page[0] === Paths.pageParams;

  useEffect(() => {
    if (isPage) router.push(Paths.startPath);
  }, [router]);

  return (
    <div className={`${styles.mainPage} ${styles[theme]}`}>
      <div className={styles.mainPage_noOutlet}>
        <header className={styles.header}>
          <SearchBar />
          <ButtonTheme />
        </header>
        <Suspense fallback={<Loader />}>
          <MovieCardList data={data} />
        </Suspense>
      </div>
      <Suspense fallback={<Loader />}>
        {data.movieById && <DetailedInfoMovies movie={data.movieById} />}
      </Suspense>
      <SelectedMoviesModal />
    </div>
  );
}
