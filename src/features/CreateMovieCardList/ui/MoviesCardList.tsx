import { FC } from 'react';
import { MovieCard } from 'features/CreateMovieCard';
import { PaginationBar } from 'features/AddPaginationBar';
import { Movie, MovieResponse, Paths } from 'shared/types';
import styles from './MoviesCardList.module.css';
import { useParams, useRouter } from 'next/navigation';

interface MovieCardListProps {
  data: MovieResponse | undefined;
}

export const MovieCardList: FC<MovieCardListProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  const page = params.page ? params.page[0] : '1';

  return (
    <main className={styles.mainHomePage}>
      {data && !data.Error ? (
        <>
          <PaginationBar totalResults={data.totalResults} />
          <div
            className={styles.characterCardList}
            data-testid="list"
            onClick={() =>
              router.push(`/${params[Paths.searchParams]}/${page}`)
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
