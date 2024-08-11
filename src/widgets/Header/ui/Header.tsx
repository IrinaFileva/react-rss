import { ButtonTheme } from 'features/ChangeApplicationTheme';
import { SearchBar } from 'features/SearchMovie';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <SearchBar />
      <ButtonTheme />
    </header>
  );
};
