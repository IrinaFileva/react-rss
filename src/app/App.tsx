import React from 'react';
import { ErrorBoundary } from 'shared/lib/ui/ErrorBoundary';
import { SearchBar } from 'features/SearchMovie';
import { MovieCardList } from 'widgets/MovieCardList';

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
