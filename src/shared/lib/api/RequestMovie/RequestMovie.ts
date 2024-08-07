import { BASE_URL } from 'shared/constants';
import { MovieResponse } from 'shared/types';

export async function requestMovies(
  search: string,
  page: string
): Promise<MovieResponse> {
  const url = `${BASE_URL}&s=${search}&page=${page}`;
  const resp: Response = await fetch(url);
  const res: MovieResponse = await resp.json();
  return res;
}
