import { BASE_URL } from 'shared/constants';
import { MovieResponse } from 'shared/types';

export async function requestMovies(
  title: string,
  number: number
): Promise<MovieResponse> {
  const url = `${BASE_URL}&s=${title}&page=${number}`;
  const resp: Response = await fetch(url);
  const res: MovieResponse = await resp.json();
  return res;
}
