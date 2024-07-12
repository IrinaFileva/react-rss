export const KEY_LS = 'IF-RSS-request';

export const FILTER_TO_QUERY_ALL_MOVIES =
  '?page=1&limit=10&notNullFields=enName&notNullFields=type&notNullFields=poster.url';

export const FILTER_TO_QUERY_SEARCH =
  '/search?page=1&limit=10&notNullFields=enName&query=';

export const X_API_KEY = '587b11db';

export const BASE_URL = `http://www.omdbapi.com/?apikey=${X_API_KEY}&`;

export const PAGE = 'page=';

export const headers = {
  accept: 'application/json',
  'X-API-KEY': X_API_KEY,
};
