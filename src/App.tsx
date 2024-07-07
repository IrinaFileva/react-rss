import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CharacterCardList } from 'components/CharacterCardList/CharacterCardList';

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
          <h1>Star Wars</h1>
          <SearchBar onClick={(name) => this.setState({ request: name })} />
        </header>
        <main>
          <CharacterCardList name={this.state.request} />
        </main>
      </ErrorBoundary>
    );
  }
}
