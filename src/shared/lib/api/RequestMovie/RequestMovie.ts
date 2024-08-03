import { BASE_URL } from 'shared/constants';
import { MovieResponse } from 'shared/types';
import { requestMoviesById } from '../RequestMovieById/RequestMovieById';

export async function requestMovies(
  search: string,
  page: string,
  id?: string
): Promise<MovieResponse> {
  const url = `${BASE_URL}&s=${search}&page=${page}`;
  const resp: Response = await fetch(url);
  const res: MovieResponse = await resp.json();
  if (id) res.movieById = await requestMoviesById(id);
  return res;
}
