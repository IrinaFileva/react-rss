'use client';
import { MovieById, TeamMovie } from 'shared/types';
import { useParams, useRouter } from 'next/navigation';
import styles from './DetailedInfoMovies.module.css';
import Image from 'next/image';
import { INITIAL_REQUEST } from 'shared/constants';

interface DetailedInfoMoviesProps {
  movie: MovieById | undefined;
}

export default function DetailedInfoMovies({ movie }: DetailedInfoMoviesProps) {
  const router = useRouter();
  const params = useParams();
  const page = params && params.page ? params.page[0] : '1';
  const search = params && params.search ? params.search : INITIAL_REQUEST;

  return (
    movie && (
      <>
        <button
          className="button"
          onClick={() => router.push(`/${search}/${page}`)}
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
