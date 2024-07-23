import { Movie } from 'shared/types';

export const testMovie: Movie = {
  Title: 'Super Men',
  Year: 1978,
  imdbID: '123456',
  Type: 'movie',
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
};

export const testMovies: Movie[] = new Array(10).fill(testMovie);
