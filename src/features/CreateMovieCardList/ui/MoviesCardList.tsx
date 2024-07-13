import { FC } from 'react';
import { MovieCard } from 'features/CreateMovieCard';
import { Movie, MovieResponse, Paths } from 'shared/types';
import { PaginationBar } from 'features/AddPaginationBar/ui/PaginationBar';
import './MoviesCardList.css';
import { Spinner } from 'shared/lib/ui/Spinner';
import { useNavigate } from 'react-router-dom';

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

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target: HTMLElement = e.target as HTMLElement;
    if (target.classList.contains('card')) {
      e.stopPropagation();
    } else {
      navigate(`/${Paths.search}${page}`);
    }
  };

  return (
    <main className="mainHomePage">
      {isLoading ? (
        <Spinner />
      ) : data && data.Search ? (
        <>
          <PaginationBar totalResults={data.totalResults} activePage={page} />
          <div className="characterCardList" onClick={onClick}>
            {data.Search &&
              data.Search.map((character: Movie) => (
                <MovieCard key={character.imdbID} movie={character} />
              ))}
          </div>
        </>
      ) : (
        <h2 className="noMovies">{data?.Error}</h2>
      )}
    </main>
  );
};
