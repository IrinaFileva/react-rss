import { RootState } from 'app/providers/storeProvider';
import { getSelectedMovies } from './selectedMoviesSelectors';
import { testMovie } from 'shared/test';

const initialState: Partial<RootState> = {
  rootReducer: {
    movies: {
      movies: [testMovie],
    },
  },
};

const state = initialState as RootState;

test('test getSelectedMovies selector', () => {
  expect(getSelectedMovies(state)).toEqual([testMovie]);
});
