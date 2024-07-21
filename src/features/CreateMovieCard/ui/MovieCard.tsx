import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Movie, Paths } from 'shared/types';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import {
  addMovie,
  deleteMovie,
  getSelectedMovies,
} from 'entities/SelectedMovies';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const selectedMovies = useAppSelector(getSelectedMovies);
  const [isChecked, setChecked] = useState<boolean>(
    selectedMovies.includes(movie)
  );

  useEffect(() => {
    if (selectedMovies.length <= 0) {
      setChecked(false);
    }
  }, [selectedMovies]);

  useEffect(() => {
    if (isChecked) {
      dispatch(addMovie(movie));
    } else {
      dispatch(deleteMovie(movie));
    }
  }, [isChecked, dispatch, movie]);

  return (
    <NavLink
      className="movieCard card"
      data-testid={movie.imdbID}
      onClick={(e) => e.stopPropagation()}
      to={`${Paths.details}${movie.imdbID}`}
    >
      <img
        className="movieCard_image card"
        src={movie.Poster}
        alt={movie.Poster}
      ></img>
      <h2 className="movieCard_title card">{movie.Title}</h2>
      <p className="movieCard_info card">
        {movie.Type} {movie.Year}
      </p>
      <input
        onClick={(e) => e.stopPropagation()}
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
        className="movieCard_checkbox"
        type="checkbox"
      ></input>
    </NavLink>
  );
};
