import { SelectedMovieSchema } from 'entities/SelectedMovies';
import {
  addMovie,
  clearStateMovies,
  deleteMovie,
  selectedMovieSlice,
} from './selectedMoviesSlices';
import { testMovie } from 'shared/test';

test('testing clear reducer', () => {
  const previousState: SelectedMovieSchema = {
    movies: [],
  };
  expect(selectedMovieSlice.reducer(previousState, clearStateMovies())).toEqual(
    { movies: [] }
  );
});

test('testing addMovie reducer', () => {
  const previousState: SelectedMovieSchema = {
    movies: [],
  };
  expect(
    selectedMovieSlice.reducer(previousState, addMovie(testMovie))
  ).toEqual({ movies: [testMovie] });
});

test('testing deleteMovie reducer', () => {
  const previousState: SelectedMovieSchema = {
    movies: [testMovie],
  };
  expect(
    selectedMovieSlice.reducer(previousState, deleteMovie(testMovie))
  ).toEqual({ movies: [] });
});
