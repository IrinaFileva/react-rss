import { combineReducers } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { selectedMovieReducer } from 'entities/SelectedMovies';

export const rootReducer = combineReducers<StateSchema>({
  movies: selectedMovieReducer,
});
