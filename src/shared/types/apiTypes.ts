export interface MovieResponse {
  Search?: Movie[];
  totalResults?: string;
  Error?: string;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: number;
  imdbID: string;
}

export interface MovieById {
  Poster: string;
  Title: string;
  Plot: string;
  Actors: string;
  Director: string;
  Type: string;
  Year: string;
}

export enum TeamMovie {
  actors = 'Actors:',
  director = 'Director:',
}
