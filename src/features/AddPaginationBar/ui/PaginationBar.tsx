import { FC, useEffect, useState } from 'react';
import { NavLink, useParams } from '@remix-run/react';
import { getPageCount, getSomePagination } from 'shared/lib/changeData';
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
  const { search } = useParams();

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
      <div className="paginationBar">
        <button
          className="paginationButton"
          onClick={onClickPrev}
          disabled={+shift <= 0}
        >
          {'< prev 10'}
        </button>
        <div className="paginationWindow">
          <div
            className="pagination"
            style={{ marginLeft: `-${shift}px` }}
            data-testid={'15'}
          >
            {countPage.map((page: string, index: number) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'page activePage' : 'page'
                }
                key={index}
                to={`/${search}/${page}`}
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
          {'next 10 >'}
        </button>
      </div>
    )
  );
};
