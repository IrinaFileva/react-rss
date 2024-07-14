import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Movie, Paths } from 'shared/types';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
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
    </NavLink>
  );
};
