import { render, screen } from '@testing-library/react';
import { SelectedMoviesModal } from './SelectedMoviesModal';
import { testMovie } from 'shared/test';
import { addMovie } from 'entities/SelectedMovies';
import { act } from 'react';
import { makeStore } from '_app/providers/storeProvider';
import { Provider } from 'react-redux';

const store = makeStore();

describe('testing SelectedMoviesModal', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing display data', async () => {
    store.dispatch(addMovie(testMovie));

    render(
      <Provider store={store}>
        <SelectedMoviesModal />
      </Provider>
    );

    const deleteButton = screen.getByText(/Unselect all/);
    expect(deleteButton).toBeInTheDocument();

    act(() => deleteButton.click());

    expect(deleteButton).not.toBeInTheDocument();
  });
});
