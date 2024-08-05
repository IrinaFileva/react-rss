import { FC } from 'react';
import { MovieCard } from 'features/CreateMovieCard';
import { PaginationBar } from 'features/AddPaginationBar';
import { Movie, MovieResponse, Paths } from 'shared/types';
import styles from './MoviesCardList.module.css';
import { useRouter } from 'next/router';
import { usePageLoading } from 'shared/lib/hooks';
import { Spinner } from 'shared/lib/ui/Spinner';

interface MovieCardListProps {
  data: MovieResponse | undefined;
}

export const MovieCardList: FC<MovieCardListProps> = ({ data }) => {
  const router = useRouter();
  const { isPageLoading } = usePageLoading();
  const page = router.query.page ? router.query.page[0] : '1';

  if (isPageLoading && !data?.movieById) return <Spinner />;

  return (
    <main className={styles.mainHomePage}>
      {data && !data.Error ? (
        <>
          <PaginationBar totalResults={data.totalResults} />
          <div
            className={styles.characterCardList}
            data-testid="list"
            onClick={() =>
              router.push({
                pathname: Paths.basePath,
                query: {
                  search: router.query.search,
                  page: [page],
                },
              })
            }
          >
            {data.Search &&
              data.Search.map((movie: Movie, index: number) => (
                <MovieCard key={index} movie={movie} />
              ))}
          </div>
        </>
      ) : (
        <h2 className={styles.noMovies}>{data && data.Error}</h2>
      )}
    </main>
  );
};
