import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieCard } from 'features/CreateMovieCard';
import { PaginationBar } from 'features/AddPaginationBar';
import { Movie, Paths } from 'shared/types';
import { Spinner } from 'shared/lib/ui/Spinner';
import { useGetMoviesQuery } from 'shared/lib/api';
import { INITIAL_REQUEST } from 'shared/constants';
import './MoviesCardList.css';

interface MovieCardListProps {
  request: string;
}

export const MovieCardList: FC<MovieCardListProps> = ({ request }) => {
  const navigate = useNavigate();
  const { page } = useParams();
  const query = request ? request : INITIAL_REQUEST;
  const activePage = page ? +page : 1;
  const { data, isFetching } = useGetMoviesQuery({
    title: query,
    page: activePage,
  });

  return (
    <main className="mainHomePage">
      {!isFetching && data && data.Error && (
        <h2 className="noMovies">{data.Error}</h2>
      )}
      {isFetching ? (
        <Spinner />
      ) : (
        data && (
          <>
            <PaginationBar
              totalResults={data.totalResults}
              activePage={activePage}
            />
            <div
              className="characterCardList"
              data-testid="list"
              onClick={() => navigate(`/${Paths.search}${page}`)}
            >
              {data.Search &&
                data.Search.map((movie: Movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
          </>
        )
      )}
    </main>
  );
};
