import { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchBar.module.css';
import { Paths } from 'shared/types';

export const SearchBar: FC = () => {
  const [request, setRequest] = useState<string>(Paths.searchParams);
  const router = useRouter();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const title = event.target.value;
    setRequest(title);
  };

  const onClick = (): void => {
    const title = request !== '' ? request.trim() : Paths.searchParams;
    router.push({
      pathname: Paths.basePath,
      query: { search: title, page: ['1'] },
    });
  };

  return (
    <>
      <h1 className={styles.titleApp}>Movies</h1>
      <form className={styles.searchBar}>
        <input
          type="search"
          value={request && request !== Paths.searchParams ? request : ''}
          className={styles.searchInput}
          placeholder="Enter the movie title"
          onChange={(event) => onChange(event)}
        ></input>
        <button
          className={`button ${styles.buttonSearch}`}
          onClick={onClick}
          type="button"
        >
          Search
        </button>
      </form>
    </>
  );
};
