import React from 'react';
import { Movie } from 'shared/types';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export class MovieCard extends React.Component<MovieCardProps> {
  public render(): JSX.Element {
    return (
      <div className="movieCard">
        <img
          className="movieCard_image"
          src={this.props.movie.poster.url}
        ></img>
        <h2 className="movieCard_title">
          {this.props.movie.enName
            ? this.props.movie.enName
            : this.props.movie.alternativeName}
        </h2>
        <p className="movieCard_info">
          {this.props.movie.type} {this.props.movie.year}
        </p>
      </div>
    );
  }
}
