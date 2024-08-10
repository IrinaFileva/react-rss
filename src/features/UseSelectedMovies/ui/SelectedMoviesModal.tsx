'use client';
import { FC, useEffect, useState } from 'react';
import { clearStateMovies, getSelectedMovies } from 'entities/SelectedMovies';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { getItemsForCsv } from 'shared/lib/changeData';
import { Movie } from 'shared/types';
import styles from './SelectedMoviesModal.module.css';

export const SelectedMoviesModal: FC = () => {
  const dispatch = useAppDispatch();
  const selectedMovies: Movie[] = useAppSelector(getSelectedMovies);
  const [isOpen, setIsOpen] = useState<string>('');

  useEffect(() => {
    if (selectedMovies.length > 0) {
      setIsOpen(styles.modalOpen);
    } else {
      setIsOpen('');
    }
  }, [selectedMovies]);

  if (selectedMovies.length <= 0) return;

  return (
    <>
      {selectedMovies.length > 0 && (
        <div className={`${styles.modal} ${isOpen}`}>
          <button
            className={styles.unselect}
            type="button"
            onClick={() => dispatch(clearStateMovies())}
          >
            Unselect all &#10060;
          </button>
          <p className={styles.modalDescription}>
            {`Selected ${selectedMovies.length} movies`}
          </p>
          <a
            className={styles.download}
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
