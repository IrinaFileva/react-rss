import { FC } from 'react';
import { Movie } from 'shared/types';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movieCard">
      <img className="movieCard_image" src={movie.Poster} alt="poster"></img>
      <h2 className="movieCard_title">{movie.Title}</h2>
      <p className="movieCard_info">
        {movie.Type} {movie.Year}
      </p>
    </div>
  );
};
