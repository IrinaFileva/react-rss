'use client';
import { MovieById, Paths, TeamMovie } from 'shared/types';
import { useParams, useRouter } from 'next/navigation';
import styles from './DetailedInfoMovies.module.css';
import Image from 'next/image';

interface DetailedInfoMoviesProps {
  movie: MovieById | undefined;
}

export default function DetailedInfoMovies({ movie }: DetailedInfoMoviesProps) {
  const router = useRouter();
  const params = useParams();
  const page = params.page ? params.page[0] : '1';

  return (
    movie && (
      <>
        <button
          className="button"
          onClick={() => router.push(`/${params[Paths.searchParams]}/${page}`)}
        >
          Close
        </button>
        <Image
          className={styles.movieIDImg}
          src={movie.Poster}
          alt={movie.Poster}
          width={220}
          height={320}
          priority={true}
        ></Image>
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
      </>
    )
  );
}
