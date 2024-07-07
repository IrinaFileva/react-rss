import React from 'react';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieCardList } from 'components/MovieCardList/MoviesCardList';

interface State {
  request: string | null;
}

export class App extends React.Component<object, State> {
  state: State = {
    request: null,
  };

  public render(): JSX.Element {
    return (
      <ErrorBoundary>
        <header>
          <h1>Movies</h1>
          <SearchBar onClick={(title) => this.setState({ request: title })} />
        </header>
        <main>
          <MovieCardList title={this.state.request} />
        </main>
      </ErrorBoundary>
    );
  }
}
