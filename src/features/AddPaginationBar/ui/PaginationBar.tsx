import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPageCount, getSomePagination } from 'shared/lib/changeData';
import { Paths } from 'shared/types';
import './PaginationBar.css';

interface PaginationProps {
  totalResults: string;
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

  const onClickNext = () => {
    const margin: number = shift + offsetPagination;
    addShist(margin);
    setClick(countClick + 1);
  };

  const onClickPrev = () => {
    const margin: number = shift - offsetPagination;
    addShist(margin);
    setClick(countClick - 1);
  };

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        onClick={onClickPrev}
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
        onClick={onClickNext}
        disabled={
          Math.floor(countPage.length / limitMoviesOnPage) <= countClick
        }
        className="paginationButton"
      >
        next 10 &#9658;
      </button>
    </div>
  );
};
