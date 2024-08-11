'use client';
import { MovieCard } from 'features/CreateMovieCard';
import { PaginationBar } from 'features/AddPaginationBar';
import { Movie, MovieResponse, Paths } from 'shared/types';
import styles from './MoviesCardList.module.css';
import { useParams, useRouter } from 'next/navigation';

interface MovieCardListProps {
  data: MovieResponse | undefined;
}

export default function MovieCardList({ data }: MovieCardListProps) {
  const router = useRouter();
  const params = useParams();
  const page = params && params.page ? params.page[0] : '1';
  const search = params && params.search ? params.search : Paths.searchParams;

  return (
    <main className={styles.mainHomePage}>
      {data && !data.Error ? (
        <>
          <PaginationBar totalResults={data.totalResults} />
          <div
            className={styles.characterCardList}
            data-testid="list"
            onClick={() => router.push(`/${search}/${page}`)}
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
}
