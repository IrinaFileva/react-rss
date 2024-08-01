import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPageCount, getSomePagination } from 'shared/lib/changeData';
import { Paths } from 'shared/types';
import styles from './PaginationBar.module.css';

interface PaginationProps {
  totalResults: string | undefined;
  activePage: number;
}

export const PaginationBar: FC<PaginationProps> = ({
  totalResults,
  activePage,
}) => {
  const offsetPagination = 370;
  const limitMoviesOnPage = 10;
  const [shift, addShist] = useState<number>(0);
  const [countClick, setClick] = useState<number>(0);
  const countPage: string[] = getPageCount(totalResults);

  const countStart: number =
    getSomePagination(countPage, limitMoviesOnPage, activePage) *
    offsetPagination;

  useEffect(() => {
    addShist(countStart);
  }, [countStart]);

  const onClickPrev = () => {
    addShist(shift - offsetPagination);
    setClick(countClick - 1);
  };

  const onClickNext = () => {
    addShist(shift + offsetPagination);
    setClick(countClick + 1);
  };

  return (
    totalResults && (
      <div className={styles.paginationBar}>
        <button
          className={styles.paginationButton}
          onClick={onClickPrev}
          disabled={+shift <= 0}
        >
          &#9668; prev 10
        </button>
        <div className={styles.paginationWindow}>
          <div
            className={styles.pagination}
            style={{ marginLeft: `-${shift}px` }}
            data-testid={'15'}
          >
            {countPage.map((page: string, index: number) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.page} ${styles.activePage}` : styles.page
                }
                key={index}
                to={`/${Paths.search}${page}`}
              >
                {page}
              </NavLink>
            ))}
          </div>
        </div>
        <button
          onClick={onClickNext}
          disabled={
            Math.floor(countPage.length / limitMoviesOnPage) <= countClick
          }
          className={styles.paginationButton}
        >
          next 10 &#9658;
        </button>
      </div>
    )
  );
};
