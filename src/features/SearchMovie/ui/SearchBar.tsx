import { ChangeEvent, FC, useState } from 'react';
import { KEY_LS } from 'shared/constants';
import './SearchBar.css';

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
    const title = request.trim();
    localStorage.setItem(KEY_LS, title || '');
    onClickCheck(title);
  };

  return (
    <div className="searchBar">
      <input
        type="search"
        value={request ? request : ''}
        className="searchInput"
        placeholder="Enter the movie title"
        onChange={(event) => onChange(event)}
      ></input>
      <button onClick={onClick} type="button">
        Search
      </button>
    </div>
  );
};
