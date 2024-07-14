import { FC, useCallback, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { MovieCardList } from 'features/CreateMovieCardList';
import { SearchBar } from 'features/SearchMovie';
import { MovieResponse } from 'shared/types';
import { requestMovies } from 'shared/lib/api';
import { useLocalStorage } from 'shared/lib/hooks';
import { INITIAL_REQUEST } from 'shared/constants';
import './Main.css';

export const Main: FC = () => {
  const { page } = useParams();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, getData] = useState<MovieResponse | null>(null);
  const [request, setRequest] = useLocalStorage();
  const activePage: number = page ? +page : 1;

  const updateList = useCallback(
    async (request: string): Promise<void> => {
      setLoading(true);
      const response: MovieResponse = await requestMovies(request, activePage);
      getData(response);
      setLoading(false);
    },
    [activePage]
  );

  useEffect(() => {
    updateList(request || INITIAL_REQUEST);
  }, [page, request, updateList]);

  return (
    <div className="mainPage">
      <div className="mainPage_noOutlet">
        <SearchBar
          onClickCheck={(request) => {
            setRequest(request);
          }}
        />
        <MovieCardList isLoading={isLoading} data={data} page={activePage} />
      </div>
      <Outlet />
    </div>
  );
};
