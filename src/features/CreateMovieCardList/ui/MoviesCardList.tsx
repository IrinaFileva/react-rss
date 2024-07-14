import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieCard } from 'features/CreateMovieCard';
import { PaginationBar } from 'features/AddPaginationBar';
import { Movie, MovieResponse, Paths } from 'shared/types';
import { Spinner } from 'shared/lib/ui/Spinner';
import './MoviesCardList.css';

interface MovieCardListProps {
  isLoading: boolean;
  data: MovieResponse | null;
  page: number;
}

export const MovieCardList: FC<MovieCardListProps> = ({
  isLoading,
  data,
  page,
}) => {
  const navigate = useNavigate();

  return (
    <main className="mainHomePage">
      {isLoading ? (
        <Spinner />
      ) : data && data.Search && data.totalResults ? (
        <>
          <PaginationBar totalResults={data.totalResults} activePage={page} />
          <div
            className="characterCardList"
            onClick={() => navigate(`/${Paths.search}${page}`)}
          >
            {data.Search &&
              data.Search.map((character: Movie, index: number) => (
                <MovieCard key={index} movie={character} />
              ))}
          </div>
        </>
      ) : (
        <h2 className="noMovies">{data && data.Error}</h2>
      )}
    </main>
  );
};
