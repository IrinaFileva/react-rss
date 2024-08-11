import { Movie, MovieById, MovieResponse } from 'shared/types';

export const testMovie: Movie = {
  Title: 'Super Men',
  Year: 1978,
  imdbID: String(Math.random()),
  Type: 'movie',
  Poster: 'https://www.kinopoisk.ru/picture/2836590/',
};

const testMovies: Movie[] = [];

for (let i = 0; i < 10; i++) {
  testMovies.push({ ...testMovie, imdbID: i.toString() });
}

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

export const mockPathRequest = 'http://www.omdbapi.com/';

export { testMovies };
