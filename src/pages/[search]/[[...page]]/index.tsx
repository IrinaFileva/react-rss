import { DetailedInfoMovies } from 'features/DisplayDetailedInfoMovies';
import { MovieCardList } from 'features/CreateMovieCardList';
import { requestMovies } from 'shared/lib/api';
import { getDataByContext } from 'shared/lib/changeData';
import { MovieResponse } from 'shared/types';
import { SearchBar } from 'features/SearchMovie';
import { ButtonTheme } from 'features/ChangeApplicationTheme';
import { useTheme } from 'shared/lib/hooks';
import { SelectedMoviesModal } from 'features/UseSelectedMovies';
import { Context } from 'vm';
import styles from './../../../app/styles/main.module.css';

export const getServerSideProps = async (context: Context) => {
  const { search, page, id } = getDataByContext(context);
  const data = await requestMovies(search, page, id);
  return { props: data };
};

export default function MainPage(data: MovieResponse) {
  const { theme } = useTheme();

  return (
    <div className={`${styles.mainPage} ${styles[theme]}`}>
      <div className={styles.mainPage_noOutlet}>
        <header className={styles.header}>
          <SearchBar />
          <ButtonTheme />
        </header>
        <MovieCardList data={data} />
      </div>
      {data.movieById && <DetailedInfoMovies movie={data.movieById} />}
      <SelectedMoviesModal />
    </div>
  );
}
