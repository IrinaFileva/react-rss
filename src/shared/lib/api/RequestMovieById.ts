import { BASE_URL } from 'shared/constants';
import { MovieById } from 'shared/types';

export async function requestMoviesById(
  id: string | undefined
): Promise<MovieById> {
  const url = `${BASE_URL}&i=${id}&plot=short`;
  const resp: Response = await fetch(url);
  const res: MovieById = await resp.json();
  return res;
}
