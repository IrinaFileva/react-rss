import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

export const SearchBar: FC = () => {
  const [request, setRequest] = useState('');
  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const title = event.target.value;
    setRequest(title);
  };

  const onClick = (): void => {
    const title = request.trim();
    navigate(`/${title}/1`);
  };

  return (
    <>
      <h1>Movies</h1>
      <form className="searchBar">
        <input
          type="search"
          value={request ? request : ''}
          className="searchInput"
          placeholder="Enter the movie title"
          onChange={(event) => onChange(event)}
        ></input>
        <button className="button buttonSearch" onClick={onClick} type="button">
          Search
        </button>
      </form>
    </>
  );
};
