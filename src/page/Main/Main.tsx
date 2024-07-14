import { FC, useCallback, useEffect, useState } from 'react';
import { MovieCardList } from 'features/CreateMovieCardList';
import { MovieResponse } from 'shared/types';
import { requestMovies } from 'shared/lib/api';
import { Outlet, useParams } from 'react-router-dom';
import { SearchBar } from 'features/SearchMovie';
import './Main.css';
import { useLocalStorage } from 'shared/lib/hooks';

export const Main: FC = () => {
  const { page } = useParams();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, getData] = useState<MovieResponse | null>(null);
  const [request, setRequest] = useLocalStorage();

  const updateList = useCallback(
    async (request: string): Promise<void> => {
      setLoading(true);
      const response: MovieResponse = await requestMovies(
        request,
        page ? +page : 1
      );
      getData(response);
      setLoading(false);
    },
    [page]
  );

  useEffect(() => {
    updateList(request || 'new');
  }, [page, request, updateList]);

  return (
    <div className="mainPage">
      <div className="mainPage_noOutlet">
        <SearchBar
          onClickCheck={(request) => {
            console.log(request);
            setRequest(request);
          }}
        />
        <MovieCardList
          isLoading={isLoading}
          data={data}
          page={page ? +page : 1}
        />
      </div>
      <Outlet />
    </div>
  );
};
