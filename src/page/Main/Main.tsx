import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MovieCardList } from 'features/CreateMovieCardList';
import { SearchBar } from 'features/SearchMovie';
import { useLocalStorage } from 'shared/lib/hooks';
import './Main.css';

export const Main: FC = () => {
  const [request, setRequest] = useLocalStorage();

  return (
    <div className="mainPage">
      <div className="mainPage_noOutlet">
        <SearchBar
          onClickCheck={(request) => {
            setRequest(request);
          }}
        />
        <MovieCardList request={request} />
      </div>
      <Outlet />
    </div>
  );
};
