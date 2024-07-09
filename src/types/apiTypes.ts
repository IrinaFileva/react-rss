export interface MovieResponse {
  limit: number;
  page: number;
  pages: number;
  total: number;
  docs: Movie[];
}

export interface Movie {
  id: string;
  alternativeName: string;
  enName: string;
  year: number;
  poster: { url: string };
  type: string;
}
