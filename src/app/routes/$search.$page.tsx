import { Outlet } from '@remix-run/react';
import { MovieCardList } from 'features/CreateMovieCardList';
import { SelectedMoviesModal } from 'features/UseSelectedMovies';
import { INITIAL_REQUEST } from 'shared/constants';
import { requestMovies } from 'shared/lib/api/RequestMovie/RequestMovie';
import { Header } from 'widgets/Header';
import { ThemeContainer } from 'widgets/ThemeContainer';

interface Params {
  search: string;
  page: string;
}

export async function loader({ params }: { params: Params }) {
  const { search, page } = params;
  const query = search && search !== 'search' ? search : INITIAL_REQUEST;
  const activePage = page ? page : '1';
  const data = await requestMovies(query, +activePage);
  return data;
}

export default function MainPage() {
  return (
    <ThemeContainer>
      <Header />
      <div className="mainPage_noOutlet">
        <MovieCardList />
        <Outlet />
        <SelectedMoviesModal />
      </div>
    </ThemeContainer>
  );
}
