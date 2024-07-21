export {
  addMovie,
  deleteMovie,
  clearStateMovies,
} from './model/slices/selectedMoviesSlices';

export { getSelectedMovies } from './model/selectors/selectors';

export type { SelectedMovieSchema } from './model/types/selectedMoviesTypes';
