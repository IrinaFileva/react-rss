import React, { ChangeEvent } from 'react';
import { SpaceApi } from 'types/apiTypes';

interface State {
  request: string;
  error: Error | null;
}

export class SearchBar extends React.Component<object, State> {
  state: State = {
    request: localStorage.getItem('IF-RSS-request') || '',
    error: null,
  };

  onChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    this.setState({ request: name });
  }

  onClick() {
    const name = this.state.request.trim().replaceAll(' ', SpaceApi.space);
    localStorage.setItem('IF-RSS-request', name);
  }

  public render(): React.ReactNode {
    if (this.state.error) throw this.state.error;
    return (
      <div className="searchBar">
        <input
          type="search"
          className="searchInput"
          placeholder="Enter the character's name"
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
