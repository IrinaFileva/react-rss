import { FC, useState } from 'react';
import { ErrorBoundary } from 'shared/lib/ui/ErrorBoundary';
import { SearchBar } from 'features/SearchMovie';
import { MovieCardList } from 'widgets/MovieCardList';
import { KEY_LS } from 'shared/constants';

export const App: FC = () => {
  const [request, setRequest] = useState<string>(
    localStorage.getItem(KEY_LS) || ''
  );

  return (
    <ErrorBoundary>
      <header>
        <h1>Movies</h1>
        <SearchBar onClickCheck={(title) => setRequest(title)} />
      </header>
      <main>
        <MovieCardList title={request} />
      </main>
    </ErrorBoundary>
  );
};
