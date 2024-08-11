import { LoaderFunctionArgs } from '@remix-run/node';
import { OutletMovies } from 'features/DisplayOutletMovies';
import { requestMoviesById } from 'shared/lib/api';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const data = await requestMoviesById(id);
  return data;
}

export default function DetailsPage() {
  return <OutletMovies />;
}
