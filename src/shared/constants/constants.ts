export const KEY_LS = 'IF-RSS-request';

export const FILTER_TO_QUERY_ALL_MOVIES =
  '?page=1&limit=10&notNullFields=enName&notNullFields=type&notNullFields=poster.url';

export const FILTER_TO_QUERY_SEARCH =
  '/search?page=1&limit=10&notNullFields=enName&query=';

export const X_API_KEY = 'Y4Y10V3-P94M69Q-MRTFK28-DGFZZWK';

export const BASE_URL = 'https://api.kinopoisk.dev/v1.4/movie';

export const headers = {
  accept: 'application/json',
  'X-API-KEY': X_API_KEY,
};
