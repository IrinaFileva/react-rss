import { FC, useEffect, useState } from 'react';
import { getPageCount, getSomePagination } from 'shared/lib/changeData';
import './PaginationBar.css';

interface PaginationProps {
  totalResults: string;
  activePage: number;
  onClickPage: (page: number) => void;
}

export const PaginationBar: FC<PaginationProps> = ({
  totalResults,
  onClickPage,
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
        <ul className="pagination" style={{ marginLeft: `-${shift}px` }}>
          {countPage.map((page: string, index: number) => (
            <li
              className={activePage === +page ? ' page activePage' : 'page'}
              onClick={() => onClickPage(+page)}
              key={index}
            >
              {page}
            </li>
          ))}
        </ul>
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
