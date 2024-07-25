export {
  addMovie,
  deleteMovie,
  clearStateMovies,
  selectedMovieReducer,
} from './model/slices/selectedMoviesSlices';

export { getSelectedMovies } from './model/selectors/selectedMoviesSelectors';

export type { SelectedMovieSchema } from './model/types/selectedMoviesTypes';
