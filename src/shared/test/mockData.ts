import { Movie, MovieById, MovieResponse } from 'shared/types';

export const testMovie: Movie = {
  Title: 'Super Men',
  Year: 1978,
  imdbID: '123456',
  Type: 'movie',
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
};

export const testMovies: Movie[] = new Array(10).fill(testMovie);

export const testMovieById: MovieById = {
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
  Title: 'Super Men',
  Type: 'movie',
  Year: '1978',
  Actors: 'Ivan',
  Director: 'Vova',
  Plot: 'Super',
};

export const testMoviesResponse: MovieResponse = {
  Search: testMovies,
  totalResults: '300',
};

export const testResponseError: MovieResponse = {
  Error: 'Oops',
  Search: [],
  totalResults: '0',
};
