import { combineReducers } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { selectedMovieReducer } from 'entities/SelectedMovies/model/slices/selectedMoviesSlices';

export const rootReducer = combineReducers<StateSchema>({
  movies: selectedMovieReducer,
});
