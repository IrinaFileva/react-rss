import { FC } from 'react';
import { Movie, Paths } from 'shared/types';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { useParams, useRouter } from 'next/navigation';
import {
  addMovie,
  deleteMovie,
  getSelectedMovies,
} from 'entities/SelectedMovies';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const page = params.page ? params.page[0] : '1';
  const selectedMovies = useAppSelector(getSelectedMovies);
  const isChecked = selectedMovies.some((m) => m.imdbID === movie.imdbID);

  const toggleMovies = () => {
    if (!isChecked) {
      dispatch(addMovie(movie));
    } else {
      dispatch(deleteMovie(movie));
    }
  };

  const onClickCard = () => {
    router.push(
      `/${params[Paths.searchParams]}/${page}/${Paths.detailsParams}/${movie.imdbID}`
    );
  };

  return (
    <div
      className={styles.movieCard}
      data-testid={movie.imdbID}
      onClick={(e) => {
        e.stopPropagation();
        onClickCard();
      }}
    >
      <img
        className={styles.movieCardImage}
        src={movie.Poster}
        alt={movie.Poster}
      ></img>
      <h2 className={styles.movieCardTitle}>{movie.Title}</h2>
      <p className={styles.movieCardInfo}>
        {movie.Type} {movie.Year}
      </p>
      <input
        onClick={(e) => {
          e.stopPropagation();
          toggleMovies();
        }}
        defaultChecked={isChecked}
        className={styles.movieCardCheckbox}
        type="checkbox"
      ></input>
    </div>
  );
};
