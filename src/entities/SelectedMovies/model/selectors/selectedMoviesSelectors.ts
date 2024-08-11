import { RootState } from 'core/providers/storeProvider';
import { Movie } from 'shared/types';

export const getSelectedMovies = (state: RootState): Movie[] => {
  return state.rootReducer.movies.movies;
};
