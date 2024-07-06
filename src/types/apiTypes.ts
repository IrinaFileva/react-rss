export interface CharacterResponse {
  info: {
    limit: number;
    next: string | null;
    page: number;
    prev: string | null;
    total: number;
  };
  data: Character[];
}

export interface Character {
  _id: string;
  description: string;
  image: string;
  name: string;
}
