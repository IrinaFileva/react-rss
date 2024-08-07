import { requestMovies, requestMoviesById } from 'shared/lib/api';
import MainPage from '../../main-page';
import { Paths } from 'shared/types';
import { lazy, Suspense } from 'react';
import styles from './../../../_app/styles/main.module.css';
import { Spinner } from 'shared/lib/ui/Spinner';

interface PageProps {
  params: {
    search: string;
    page: string[];
  };
}

export default async function Page({ params: { search, page } }: PageProps) {
  const query = search !== Paths.searchParams ? search : 'new';
  const data = await requestMovies(query, page[0]);
  const id = page[2] ? await requestMoviesById(page[2]) : null;

  const LazyList = lazy(
    () => import('./../../../features/CreateMovieCardList/ui/MoviesCardList')
  );
  const LazyMovies = lazy(
    () =>
      import(
        './../../../features/DisplayDetailedInfoMovies/ui/DetailedInfoMovies'
      )
  );

  return (
    <MainPage>
      <div className={styles.mainPage_noOutlet}>
        {!id ? (
          <Suspense fallback={<Spinner />}>
            <LazyList data={data} />
          </Suspense>
        ) : (
          <LazyList data={data} />
        )}
        {id && (
          <div className={styles.movieID}>
            <Suspense fallback={<Spinner />}>
              {<LazyMovies movie={id} />}
            </Suspense>
          </div>
        )}
      </div>
    </MainPage>
  );
}
