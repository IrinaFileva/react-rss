import { BrowserRouter } from 'react-router-dom';
import { MovieCard } from './MovieCard';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'app/providers/storeProvider/config/store';
import { testMovie } from 'shared/test';

describe('testing Card', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing incoming data', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieCard movie={testMovie} />
        </Provider>
      </BrowserRouter>
    );
    const title = getByText(testMovie.Title);
    expect(title).toBeInTheDocument();

    const poster = getByAltText(testMovie.Poster);
    expect(poster).toBeInTheDocument();

    const typeYear = getByText(`${testMovie.Type} ${testMovie.Year}`);
    expect(typeYear).toBeInTheDocument();
  });

  it('testing clicking card opens a detailed card component', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieCard movie={testMovie} />
        </Provider>
      </BrowserRouter>
    );

    const card = getByTestId('123456');
    expect(card).toBeInTheDocument();
    await userEvent.click(card);
    const url = `/details/${testMovie.imdbID}`;
    expect(location.pathname).toBe(url);
  });
});
