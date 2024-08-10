import { render } from '@testing-library/react';
import RootLayout from 'app/layout';
import MovieCardList from 'features/CreateMovieCardList/ui/MoviesCardList';
import { testMoviesResponse } from '../mockData';

it('testing RootLayout', () => {
  const { getByText } = render(
    <RootLayout>
      <MovieCardList data={testMoviesResponse} />
    </RootLayout>
  );
  const text = getByText('Movies');
  expect(text).toBeInTheDocument();
});
