import { FC, useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MovieById, Paths, TeamMovie } from 'shared/types';
import { requestMoviesById } from 'shared/lib/api';
import { Spinner } from 'shared/lib/ui/Spinner';
import './OutletMovies.css';

export const OutletMovies: FC = () => {
  const { id } = useParams();
  const { page } = useParams();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieById | null>(null);

  const getMovie = useCallback(async (): Promise<void> => {
    setLoading(true);
    const promise: MovieById = await requestMoviesById(id);
    setMovie(promise);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [id, getMovie]);

  return (
    <div className="movieID">
      {movie && (
        <>
          <Link to={`/${Paths.search}${page}`}>
            <button className="button movieID_button">Close</button>
          </Link>
          <img
            className="movieID_img"
            src={movie.Poster}
            alt={movie.Poster}
          ></img>
          <h2>{movie.Title}</h2>
          <h3>{movie.Type}</h3>
          <p>{movie.Plot}</p>
          <p className="movieID_actors">
            <span>{TeamMovie.actors}</span>
            <br></br>
            {movie.Actors}
          </p>
          <p className="movieID_actors">
            <span>{TeamMovie.director}</span>
            <br></br>
            {movie.Director}
          </p>
          <h3>{movie.Year}</h3>
        </>
      )}{' '}
      {isLoading && !movie && <Spinner />}
    </div>
  );
};
