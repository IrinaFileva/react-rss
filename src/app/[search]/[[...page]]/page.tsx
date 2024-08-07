import { requestMovies } from 'shared/lib/api';
import MainPage from '../../main-page';
import { Paths } from 'shared/types';

interface PageProps {
  params: {
    search: string;
    page: string[];
  };
}

export default async function Page({ params: { search, page } }: PageProps) {
  const query = search !== Paths.searchParams ? search : 'new';
  const data = await requestMovies(query, page[0], page[2]);

  return <MainPage {...data} />;
}
