import { FC } from 'react';
import { Movie } from 'shared/types';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movieCard">
      <img className="movieCard_image" src={movie.poster.url}></img>
      <h2 className="movieCard_title">
        {movie.enName ? movie.enName : movie.alternativeName}
      </h2>
      <p className="movieCard_info">
        {movie.type} {movie.year}
      </p>
    </div>
  );
};
