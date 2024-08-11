'use client';
import { FC, useEffect, useState } from 'react';
import { getPageCount, getSomePagination } from 'shared/lib/changeData';
import styles from './PaginationBar.module.css';
import { Paths } from 'shared/types';
import { useParams, useRouter } from 'next/navigation';

interface PaginationProps {
  totalResults: string;
}

export const PaginationBar: FC<PaginationProps> = ({ totalResults }) => {
  const offsetPagination = 370;
  const limitMoviesOnPage = 10;
  const [shift, addShist] = useState<number>(0);
  const [countClick, setClick] = useState<number>(0);
  const countPage: string[] = getPageCount(totalResults);
  const router = useRouter();
  const params = useParams();
  const activePage = params && params.page ? params.page[0] : '1';

  const countStart: number =
    getSomePagination(countPage, limitMoviesOnPage, +activePage) *
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

  const onClick = (page: string): void => {
    router.push(`/${params[Paths.searchParams]}/${page}`);
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
            data-testid={shift}
          >
            {countPage.map((page: string, index: number) => (
              <button
                className={
                  +activePage === index + 1
                    ? `${styles.page} ${styles.activePage}`
                    : styles.page
                }
                key={index}
                onClick={() => onClick(page)}
              >
                {page}
              </button>
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
