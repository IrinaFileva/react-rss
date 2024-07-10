import {
  FILTER_TO_QUERY_ALL_MOVIES,
  FILTER_TO_QUERY_SEARCH,
  X_API_KEY,
} from 'shared/constants';
import { MovieResponse } from 'shared/types';

const headers = {
  accept: 'application/json',
  'X-API-KEY': X_API_KEY,
};

class Api {
  private readonly baseUrl = 'https://api.kinopoisk.dev/v1.4/movie';

  public async requestMovies(title?: string): Promise<MovieResponse> {
    const url = `${this.baseUrl}${title ? `${FILTER_TO_QUERY_SEARCH}${title}` : `${FILTER_TO_QUERY_ALL_MOVIES}`}`;
    const resp: Response = await fetch(url, { headers });
    const res: MovieResponse = await resp.json();
    console.log(res);
    return res;
  }
}

export const api = new Api();
