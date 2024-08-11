import { FC } from 'react';
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from '@remix-run/react';
import { MovieCard } from 'features/CreateMovieCard';
import { PaginationBar } from 'features/AddPaginationBar';
import { Movie, MovieResponse } from 'shared/types';
import { Spinner } from 'shared/lib/ui/Spinner';
import './MoviesCardList.css';

export const MovieCardList: FC = () => {
  const data: MovieResponse = useLoaderData();
  const navigate = useNavigate();
  const { state } = useNavigation();
  const isLoading = state === 'loading';
  const { search, page, id } = useParams();
  const activePage = page ? +page : 1;

  return (
    <main className="mainHomePage">
      {isLoading && !id ? (
        <Spinner />
      ) : data && !data.Error ? (
        <>
          <PaginationBar
            totalResults={data.totalResults}
            activePage={activePage}
          />
          <div
            className="characterCardList"
            data-testid="list"
            onClick={() => navigate(`/${search}/${page}`)}
          >
            {data.Search &&
              data.Search.map((movie: Movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
          </div>
        </>
      ) : (
        <h2 className="noMovies">{data && data.Error}</h2>
      )}
    </main>
  );
};
