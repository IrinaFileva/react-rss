import { FC } from 'react';
import { MovieById, TeamMovie } from 'shared/types';
import { Spinner } from 'shared/lib/ui/Spinner';
import './OutletMovies.css';
import {
  Link,
  useLoaderData,
  useNavigation,
  useParams,
} from '@remix-run/react';

export const OutletMovies: FC = () => {
  const data: MovieById = useLoaderData();
  const { search, page, id } = useParams();
  const { state } = useNavigation();
  const isLoading = state === 'loading';

  return (
    <div className="movieID">
      {isLoading && id ? (
        <Spinner />
      ) : (
        data && (
          <>
            <Link to={`/${search}/${page}`}>
              <button className="button movieID_button">Close</button>
            </Link>
            <img
              className="movieID_img"
              src={data.Poster}
              alt={data.Poster}
            ></img>
            <h2>{data.Title}</h2>
            <h3>{data.Type}</h3>
            <p>{data.Plot}</p>
            <p className="movieID_actors">
              <span>{TeamMovie.actors}</span>
              <br></br>
              {data.Actors}
            </p>
            <p className="movieID_actors">
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
