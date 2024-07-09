import React, { ChangeEvent } from 'react';
import { KEY_LS } from 'types/constants';
import './SearchBar.css';

interface State {
  request: string;
  error: Error | null;
}

type Props = {
  onClick: (request: string) => void;
};

export class SearchBar extends React.Component<Props, State> {
  state: State = {
    request: localStorage.getItem(KEY_LS) || '',
    error: null,
  };

  onChange(event: ChangeEvent<HTMLInputElement>): void {
    const title = event.target.value;
    this.setState({ request: title });
  }

  onClick(): void {
    const title = this.state.request.trim();
    localStorage.setItem(KEY_LS, title);
    this.props.onClick(title);
  }

  public render(): React.ReactNode {
    if (this.state.error) throw this.state.error;
    return (
      <div className="searchBar">
        <input
          type="search"
          value={this.state.request}
          className="searchInput"
          placeholder="Enter the movie title"
          onChange={(event) => this.onChange(event)}
        ></input>
        <button onClick={() => this.onClick()} type="button">
          Search
        </button>
        <button
          onClick={() => this.setState({ error: new Error() })}
          type="button"
        >
          Try Error
        </button>
      </div>
    );
  }
}
