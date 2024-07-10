import { FC, useEffect, useState } from 'react';
import { MovieCard } from 'features/CreateMovieCard';
import { Movie } from 'shared/types';
import { requestMovies } from 'shared/lib/api';
import Spinner from 'shared/assets/spinner.svg';
import './MoviesCardList.css';

interface MovieCardListProps {
  title: string | null;
}

export const MovieCardList: FC<MovieCardListProps> = ({ title }) => {
  const [movies, getMovies] = useState<Movie[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const updateList = async (title: string | null): Promise<void> => {
    setLoading(true);
    let response: Movie[];
    if (title) {
      response = (await requestMovies(title)).docs;
    } else {
      response = (await requestMovies()).docs;
    }
    getMovies(response);
    setLoading(false);
  };

  useEffect(() => {
    updateList(title);
  }, [title]);

  return (
    <div className="characterCardList">
      {isLoading && (
        <div className="spinner">
          <h2>Loading...</h2>
          <img src={Spinner} alt="spinner" width={250} height={250} />
        </div>
      )}
      {movies &&
        !isLoading &&
        movies.map((character: Movie) => (
          <MovieCard key={character.id} movie={character} />
        ))}
      {movies && !isLoading && movies.length < 1 && <h2>No results</h2>}
    </div>
  );
};
