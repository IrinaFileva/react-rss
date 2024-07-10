import React from 'react';
import { MovieCard } from 'features/CreateMovieCard';
import { Movie } from 'shared/types';
import { KEY_LS } from 'shared/constants';
import { api } from 'shared/lib/api';
import Spinner from 'shared/assets/spinner.svg';
import './MoviesCardList.css';

interface MovieCardListProps {
  title: string | null;
}

interface MovieCardListState {
  movies: Movie[] | null;
  isLoading: boolean;
}

export class MovieCardList extends React.Component<
  MovieCardListProps,
  MovieCardListState
> {
  state: MovieCardListState = {
    movies: null,
    isLoading: false,
  };

  private async updateList(title: string | null): Promise<void> {
    this.setState({ isLoading: true });
    let response: Movie[];
    if (title) {
      response = (await api.requestMovies(title)).docs;
    } else {
      response = (await api.requestMovies()).docs;
    }
    this.setState({ movies: response, isLoading: false });
  }

  componentDidMount(): void {
    const title = localStorage.getItem(KEY_LS);
    this.updateList(title);
  }

  componentDidUpdate(prevProps: Readonly<MovieCardListProps>): void {
    if (this.props.title !== prevProps.title) {
      this.updateList(this.props.title);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="characterCardList">
        {this.state.isLoading && (
          <div className="spinner">
            <h2>Loading...</h2>
            <img src={Spinner} alt="spinner" width={250} height={250} />
          </div>
        )}
        {this.state.movies &&
          !this.state.isLoading &&
          this.state.movies.map((character: Movie) => (
            <MovieCard key={character.id} movie={character} />
          ))}
        {this.state.movies &&
          !this.state.isLoading &&
          this.state.movies.length < 1 && <h2>No results</h2>}
      </div>
    );
  }
}
