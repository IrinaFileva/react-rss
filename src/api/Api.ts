import { Character, CharacterResponse } from '../types/apiTypes';

class Api {
  private readonly baseUrl =
    'https://starwars-databank-server.vercel.app/api/v1';

  private async requestCharacters<T>(name?: string): Promise<T> {
    const url = `${this.baseUrl}/characters${name ? `/name/${name}` : ''}`;
    const resp: Response = await fetch(url);
    const res: T = await resp.json();
    return res;
  }

  public async getCharacters(): Promise<CharacterResponse> {
    return await this.requestCharacters<CharacterResponse>();
  }

  public async searchCharacter(name: string): Promise<Character[]> {
    return await this.requestCharacters<Character[]>(name);
  }
}

export const api = new Api();
