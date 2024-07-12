export interface MovieResponse {
  Search: Movie[];
  totalResults: string;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: number;
  imdbID: string;
}
