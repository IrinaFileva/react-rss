import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedMovieSchema } from '../types/selectedMoviesTypes';
import { Movie } from 'shared/types';

const initialState: SelectedMovieSchema = {
  movies: [],
};

export const selectedMovieSlice = createSlice({
  name: 'selectedMovies',
  initialState,
  reducers: {
    addMovie(state, actions: PayloadAction<Movie>) {
      const includes = state.movies.some(
        (movie) => movie.imdbID === actions.payload.imdbID
      );
      if (!includes) {
        state.movies.push(actions.payload);
      }
    },
    deleteMovie(state, actions: PayloadAction<Movie>) {
      const includes = state.movies.some(
        (movie) => movie.imdbID === actions.payload.imdbID
      );
      if (includes) {
        state.movies = state.movies.filter(
          (movie) => movie.imdbID !== actions.payload.imdbID
        );
      }
    },
    clearStateMovies(state) {
      state.movies.length = 0;
    },
  },
});

export const { reducer: selectedMovieReducer } = selectedMovieSlice;

export const { addMovie, deleteMovie, clearStateMovies } =
  selectedMovieSlice.actions;
