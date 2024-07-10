import {
  BASE_URL,
  FILTER_TO_QUERY_ALL_MOVIES,
  FILTER_TO_QUERY_SEARCH,
} from 'shared/constants';
import { headers } from 'shared/constants/constants';
import { MovieResponse } from 'shared/types';

export async function requestMovies(title?: string): Promise<MovieResponse> {
  const url = `${BASE_URL}${title ? `${FILTER_TO_QUERY_SEARCH}${title}` : `${FILTER_TO_QUERY_ALL_MOVIES}`}`;
  const resp: Response = await fetch(url, { headers });
  const res: MovieResponse = await resp.json();
  return res;
}
