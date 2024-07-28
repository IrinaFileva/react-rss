import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MovieCardList } from 'features/CreateMovieCardList';
import { SearchBar } from 'features/SearchMovie';
import { useLocalStorage, useTheme } from 'shared/lib/hooks';
import { SelectedMoviesModal } from 'features/UseSelectedMovies';
import { ButtonTheme } from 'features/ChangeApplicationTheme';
import './Main.css';

export const Main: FC = () => {
  const [request, setRequest] = useLocalStorage();
  const { theme } = useTheme();

  return (
    <div className={`mainPage ${theme}`}>
      <div className="mainPage_noOutlet">
        <header className="header">
          <SearchBar
            onClickCheck={(request) => {
              setRequest(request);
            }}
          />
          <ButtonTheme />
        </header>
        <MovieCardList request={request} />
        <SelectedMoviesModal />
      </div>
      <Outlet />
    </div>
  );
};
