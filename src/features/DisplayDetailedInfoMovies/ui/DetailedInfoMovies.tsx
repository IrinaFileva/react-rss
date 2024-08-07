import { FC } from 'react';
import { MovieById, Paths, TeamMovie } from 'shared/types';
import { useParams, useRouter } from 'next/navigation';
import styles from './DetailedInfoMovies.module.css';

interface DetailedInfoMoviesProps {
  movie: MovieById | undefined;
}

export const DetailedInfoMovies: FC<DetailedInfoMoviesProps> = ({ movie }) => {
  const router = useRouter();
  const params = useParams();
  const page = params.page ? params.page[0] : '1';

  return (
    movie && (
      <div className={styles.movieID}>
        <button
          className="button"
          onClick={() => router.push(`/${params[Paths.searchParams]}/${page}`)}
        >
          Close
        </button>
        <img
          className={styles.movieIDImg}
          src={movie.Poster}
          alt={movie.Poster}
        ></img>
        <h2>{movie.Title}</h2>
        <h3>{movie.Type}</h3>
        <p>{movie.Plot}</p>
        <p className={styles.movieIDActors}>
          <span>{TeamMovie.actors}</span>
          <br></br>
          {movie.Actors}
        </p>
        <p className={styles.movieIDActors}>
          <span>{TeamMovie.director}</span>
          <br></br>
          {movie.Director}
        </p>
        <h3>{movie.Year}</h3>
      </div>
    )
  );
};
