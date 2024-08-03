import { render, screen } from '@testing-library/react';
import { SelectedMoviesModal } from './SelectedMoviesModal';
import { store, StoreProvider } from 'app/providers/storeProvider';
import { testMovie } from 'shared/test';
import { addMovie } from 'entities/SelectedMovies';
import { act } from 'react';

describe('testing SelectedMoviesModal', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing display data', async () => {
    store.dispatch(addMovie(testMovie));

    render(
      <StoreProvider>
        <SelectedMoviesModal />
      </StoreProvider>
    );

    const deleteButton = screen.getByText(/Unselect all/);
    expect(deleteButton).toBeInTheDocument();

    act(() => deleteButton.click());

    expect(deleteButton).not.toBeInTheDocument();
  });
});
