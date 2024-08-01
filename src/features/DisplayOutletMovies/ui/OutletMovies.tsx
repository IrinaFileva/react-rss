import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Paths, TeamMovie } from 'shared/types';
import { Spinner } from 'shared/lib/ui/Spinner';
import { useGetMovieByIdQuery } from 'shared/lib/api';
import styles from './OutletMovies.module.css';

export const OutletMovies: FC = () => {
  const { id } = useParams();
  const { page } = useParams();
  const { data, isFetching } = useGetMovieByIdQuery(id || '');

  return (
    <div className={styles.movieID}>
      {isFetching ? (
        <Spinner />
      ) : (
        data && (
          <>
            <Link to={`/${Paths.search}${page}`}>
              <button className={`button ${styles.movieIDButton}`}>
                Close
              </button>
            </Link>
            <img
              className={styles.movieIDImg}
              src={data.Poster}
              alt={data.Poster}
            ></img>
            <h2>{data.Title}</h2>
            <h3>{data.Type}</h3>
            <p>{data.Plot}</p>
            <p className={styles.movieIDActors}>
              <span>{TeamMovie.actors}</span>
              <br></br>
              {data.Actors}
            </p>
            <p className={styles.movieIDActors}>
              <span>{TeamMovie.director}</span>
              <br></br>
              {data.Director}
            </p>
            <h3>{data.Year}</h3>
          </>
        )
      )}
    </div>
  );
};
