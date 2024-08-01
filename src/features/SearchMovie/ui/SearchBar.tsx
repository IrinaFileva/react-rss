import { ChangeEvent, FC } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from 'shared/types';
import { useLocalStorage } from 'shared/lib/hooks';
import styles from './SearchBar.module.css';

interface Props {
  onClickCheck: (request: string) => void;
}

export const SearchBar: FC<Props> = ({ onClickCheck }) => {
  const [request, setRequest] = useLocalStorage();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const title = event.target.value;
    setRequest(title);
  };

  const onClick = (): void => {
    const title = request.trim();
    onClickCheck(title);
  };

  return (
    <>
      <h1>Movies</h1>
      <form className={styles.searchBar}>
        <input
          type="search"
          value={request ? request : ''}
          className={styles.searchInput}
          placeholder="Enter the movie title"
          onChange={(event) => onChange(event)}
        ></input>
        <Link to={`/${Paths.search}${1}`}>
          <button
            className={`button ${styles.buttonSearch}`}
            onClick={onClick}
            type="button"
          >
            Search
          </button>
        </Link>
      </form>
    </>
  );
};
