import { Reducer } from '@reduxjs/toolkit';
import { SelectedMovieSchema } from 'entities/SelectedMovies';

export interface StateSchema {
  movies: Reducer<SelectedMovieSchema>;
}
