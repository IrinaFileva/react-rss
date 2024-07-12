import { ChangeEvent, FC, useState } from 'react';
import { KEY_LS } from 'shared/constants';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { PAGE } from 'shared/constants/constants';

interface Props {
  onClickCheck: (request: string) => void;
}

export const SearchBar: FC<Props> = ({ onClickCheck }) => {
  const [request, setRequest] = useState<string>(
    localStorage.getItem(KEY_LS) || ''
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const title = event.target.value;
    setRequest(title);
  };

  const onClick = (): void => {
    console.log(request);
    const title = request.trim();
    localStorage.setItem(KEY_LS, title || '');
    onClickCheck(title);
  };

  return (
    <header>
      <h1>Movies</h1>
      <form className="searchBar">
        <input
          type="search"
          value={request ? request : ''}
          className="searchInput"
          placeholder="Enter the movie title"
          onChange={(event) => onChange(event)}
        ></input>
        <Link to={`/${PAGE}${1}`}>
          <button
            className="button buttonSearch"
            onClick={onClick}
            type="button"
          >
            Search
          </button>
        </Link>
      </form>
    </header>
  );
};
