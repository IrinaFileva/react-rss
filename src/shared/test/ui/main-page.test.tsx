import { render } from '@testing-library/react';
import { makeStore } from '_app/providers/storeProvider';
import MainPage from 'app/main-page';
import MovieCardList from 'features/CreateMovieCardList/ui/MoviesCardList';
import { Provider } from 'react-redux';
import { testMoviesResponse } from '../mockData';

const store = makeStore();

it('testing main-page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MainPage>
        <MovieCardList data={testMoviesResponse} />
      </MainPage>
    </Provider>
  );

  const text = getByText('Movies');
  expect(text).toBeInTheDocument();
});
