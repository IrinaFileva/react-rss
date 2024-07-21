import { clearStateMovies, getSelectedMovies } from 'entities/SelectedMovies';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { getItemsForCsv } from 'shared/lib/changeData';
import { Movie } from 'shared/types';
import './SelectedMoviesModal.css';

export const SelectedMoviesModal: FC = () => {
  const dispatch = useAppDispatch();
  const selectedMovies: Movie[] = useAppSelector(getSelectedMovies);
  const [isOpen, setIsOpen] = useState<string>('');

  useEffect(() => {
    if (selectedMovies.length > 0) {
      setIsOpen('modal_open');
    } else {
      setIsOpen('');
    }
  }, [selectedMovies]);

  if (selectedMovies.length <= 0) return;

  return (
    <>
      {selectedMovies.length > 0 && (
        <div className={`modal ${isOpen}`}>
          <p className="modal_description">
            {' '}
            Selected {selectedMovies.length} movies
          </p>
          <button
            className="unselect"
            type="button"
            onClick={() => dispatch(clearStateMovies())}
          >
            Unselect all &#10060;
          </button>
          <a
            className="download"
            href={getItemsForCsv(selectedMovies)}
            download={`${selectedMovies.length}_movies.csv`}
          >
            Download &#128190;
          </a>
        </div>
      )}
    </>
  );
};
