import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPageCount, getSomePagination } from 'shared/lib/changeData';
import { Paths } from 'shared/types';
import './PaginationBar.css';

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

  return (
    totalResults && (
      <div className="paginationBar">
        <button
          className="paginationButton"
          onClick={() => {
            addShist(shift - offsetPagination);
            setClick(countClick - 1);
          }}
          disabled={+shift <= 0}
        >
          &#9668; prev 10
        </button>
        <div className="paginationWindow">
          <div className="pagination" style={{ marginLeft: `-${shift}px` }}>
            {countPage.map((page: string, index: number) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'page activePage' : 'page'
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
          onClick={() => {
            addShist(shift + offsetPagination);
            setClick(countClick + 1);
          }}
          disabled={
            Math.floor(countPage.length / limitMoviesOnPage) <= countClick
          }
          className="paginationButton"
        >
          next 10 &#9658;
        </button>
      </div>
    )
  );
};
